import React, { Component } from 'react';
import { ENTER_KEY_CODE } from '../constant';
import * as actions from './../actions/index'
import {connect} from "react-redux";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nonEditingMode: true,
      newContent: props.item.title
    }
  }

  clickDelete = () => {
    const { onDeleteTodo, item } = this.props;
    onDeleteTodo(item);
  };

  completedItem = () => {
    const {onCompletedTodo, item} = this.props;
    onCompletedTodo(item);
  };

  switchToEditMode = () => {
    this.setState({
      nonEditingMode: false,
    });
  };

  handleFinishEditing = (event) => {
    event.preventDefault();

    if (event.keyCode === ENTER_KEY_CODE) {
      const {onEditTodo, item} = this.props;
      onEditTodo(item,this.state.newContent );

      this.setState({
        nonEditingMode: true,
      })
    }
  };

  onItemContentChanged = (event) => {
    const value = event.target.value;

    this.setState({
      newContent: value
    });
  };

  renderItemContent = () => {
    const {item} = this.props;
    const {nonEditingMode, newContent} = this.state;

    if (nonEditingMode) {
      return <p onDoubleClick={this.switchToEditMode}>{item.title}</p>
    }

    return (
      <input
        className="input-edit"
        defaultValue={newContent}
        onChange={this.onItemContentChanged}
        onKeyUp={this.handleFinishEditing}
      />)
  };

  render() {
    const isComplete = this.props.item.isComplete;

    return (
      <li className={`todo-item ${isComplete ? 'completed' : 'item'}`}>
        <input type="checkbox" checked={isComplete} onChange={this.completedItem}/>

        {this.renderItemContent()}

        <button className="btn-delete" onClick={this.clickDelete}> X</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTodo : (todo) => {
      dispatch(actions.deleteTodo(todo));
    },
    onCompletedTodo : (todo) => {
      dispatch(actions.completedTodo(todo));
    },
    onEditTodo : (todo, title) => {
      dispatch(actions.editTodo(todo, title));
    }
  }
};

export default connect(null, mapDispatchToProps) (TodoItem);