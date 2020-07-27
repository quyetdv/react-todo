import React, { Component } from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import FooterTodo from './FooterTodo';
import { connect } from 'react-redux';
import { addTodo, changeFilter, clearCompleted, toggleCompleteAll } from '../actions';

class TodoList extends Component {
  render() {
    let {
      todos,
      currentFilter,
      changeFilter,
      clearCompleted,
      addTodo,
      toggleCompleteAll
    } = this.props;

    let activeList = todos.filter(item => !item.isComplete);

    let countItem = activeList.length;

    let countCompleted = todos.length - activeList.length;
    const arrowShow = !!todos.length;

    let data = [];

    if (currentFilter === "all") {
      data = todos;
    } else if (currentFilter === "active"){
      data = activeList;
    } else {
      data = todos.filter(item => item.isComplete);
    }

    return (
      <ul>
        <Header
          arrowShow={arrowShow}
          onAddTodo={addTodo}
          onToggleCompleteAll={toggleCompleteAll}
        />

        {data.length > 0 && data.map((item, index) =>
          <TodoItem
            key={item.id}
            item={item}
          />)}

        {todos.length > 0 &&
        <FooterTodo
          total={countItem}
          currentFilter={currentFilter}
          countCompleted={countCompleted}
          onChangeFilter={changeFilter}
          onClearCompleted={clearCompleted}
        />
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos : state.todo.todos,
  currentFilter: state.todo.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: todo => dispatch(addTodo(todo)),
  toggleCompleteAll: completed => dispatch(toggleCompleteAll(completed)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
  clearCompleted: () => dispatch(clearCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);