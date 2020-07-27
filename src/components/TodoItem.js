import React, { Component } from 'react';
import { ENTER_KEY_CODE } from '../constant';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nonEditingMode: true,
      newContent: props.item.title
    }
  }

  clickDelete = () => {
    const {onDeleteItem, item} = this.props;

    if (typeof onDeleteItem === 'function') {
      onDeleteItem(item);
    }
  };

  completedItem = () => {
    const {onCompleteItem, item} = this.props;

    if (typeof onCompleteItem === 'function') {
      onCompleteItem(item);
    }
  };

  switchToEditMode = () => {
    this.setState({
      nonEditingMode: false,
    });
  };

  handleFinishEditing = (event) => {
    event.preventDefault();

    if (event.keyCode === ENTER_KEY_CODE) {
      this.props.onFinishEditItem(this.props.item, this.state.newContent);

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

export default TodoItem;