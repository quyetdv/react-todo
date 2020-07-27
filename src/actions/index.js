import * as types from './../constants/ActiveType'

export const addTodo = (todo) => {
  return {
    type : types.ADD_TODO,
    todo : todo
  }
};

export const deleteTodo = (todo) => {
  return {
    type : types.DELETE_TODO,
    todo : todo
  }
};

export const completedTodo = (todo) => {
  return {
    type : types.COMPLETED_TODO,
    todo : todo
  }
};

export const editTodo = (todo, title) => {
  return {
    type : types.UPDATE_TODO,
    todo : todo,
    title : title
  }
};

export const clearCompleted = () => {
  return {
    type : types.CLEAR_COMPLETED
  }
};

export const toggleCompleteAll = (checkAll) => {
  return {
    type : types.TOGGLE_COMPLETE_ALL,
    checkAll : checkAll
  }
};

export const changeFilter = (filter) => {
  return {
    type: types.CHANGE_FILTER,
    filter
  };
};