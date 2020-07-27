import React, { Component } from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import FooterTodo from './FooterTodo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem : [],
      currentFilter : 'all',
      checkAllComplete: true,
    };
  }

  deleteItem = (deletedItem) => {
    const listItem = this.state.listItem.filter(item => item.id !== deletedItem.id);

    this.setState( {
      listItem
    });
  };

  addItem = (item) => {
    this.setState( {
      listItem : [...this.state.listItem, item]
    });
  };

  editItem = (editedItem, title) => {
    let listItem = this.state.listItem.map(item => ({
      ...item,
      title: item.id === editedItem.id ? title : item.title
    }));

    listItem = listItem.filter(item => item.title);

    this.setState( {
      listItem
    });
  };

  completeItem = (completedItem) => {
    const listItem = this.state.listItem.map(item => ({
      ...item,
      isComplete: item.id === completedItem.id ? !item.isComplete : item.isComplete
    }));

    this.setState( {
      listItem
    });
  };

  clearCompleted = () => {
    const listItem = this.state.listItem.filter(item => !item.isComplete);

    this.setState( {
      listItem
    });
  };

  changeFilter = (filter) => {
    this.setState({
      currentFilter : filter
    });
  };

  toggleCompleteAll = () => {
    let { checkAllComplete, listItem } = this.state;

    listItem = listItem.map(item => ({
      ...item,
      isComplete: checkAllComplete
    }));

    this.setState({
      listItem,
      checkAllComplete : !checkAllComplete
    });
  };

  render() {
    let { listItem, currentFilter, checkAllComplete } = this.state;

    let activeList = listItem.filter(item => !item.isComplete);

    let countItem = activeList.length;
    let countCompleted = listItem.length - activeList.length;
    let data = [];

    const arrowShow = !!listItem.length;

    if (currentFilter === "all") {
      data = listItem;
    } else if (currentFilter === "active"){
      data = activeList;
    } else {
      data = listItem.filter(item => item.isComplete);
    }

    return (
      <ul>
        <Header
          onItemSubmit={this.addItem}
          toggleCompleteAll={this.toggleCompleteAll}
          checkAllComplete={checkAllComplete}
          arrowShow={arrowShow}
        />

        {data.length > 0 && data.map((item, index) =>
          <TodoItem
            key={item.id}
            item={item}
            onDeleteItem={this.deleteItem}
            onCompleteItem={this.completeItem}
            onFinishEditItem={(item, title) => this.editItem(item, title)}
          />)}

        {listItem.length > 0 &&
        <FooterTodo
          total={countItem}
          countCompleted={countCompleted}
          onClearCompletedClick={this.clearCompleted}
          onChangeFilter={this.changeFilter}
        />
        }
      </ul>
    );
  }
}

export default TodoList;