import React, { useEffect } from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import FooterTodo from './FooterTodo';
import {bindActionCreators} from "redux";
import * as TodoActions from "../../actions/todos/TodoAction";
import {connect} from "react-redux";

function TodoList ({todos, currentFilter, actions}) {
    useEffect(() => {
        const { getDataAPI } = actions
        getDataAPI()
    },[])
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
          addTodo={actions.addTodo}
          completeAllTodos={actions.completeAllTodos}
        />
        {data.length > 0 && data.map((item, index) =>
          <TodoItem
            key={item.id}
            item={item}
            completeTodo = {actions.completeTodo}
            deleteTodo = {actions.deleteTodo}
            editTodo = {actions.editTodo}
          />)}

        {todos.length > 0 &&
          <FooterTodo
            total={countItem}
            countCompleted={countCompleted}
            currentFilter = {currentFilter}
            setVisibilityFilter = {actions.setVisibilityFilter}
            clearCompleted = {actions.clearCompleted}
          />
        }
      </ul>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todosReducers.todos,
        currentFilter: state.todosReducers.currentFilter
    }
}

const mapDispatchToProps = dispatch => ({
    // addTodo: todo => dispatch(addTodo(todo)),
    actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
