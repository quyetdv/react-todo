import * as types from '../../constants/ActionTypes'

export const addTodo = todo => ({ type: types.ADD_TODO, todo: todo })

export const deleteTodo = todo => ({ type: types.DELETE_TODO, todo: todo })

export const editTodo = (todo, title) => ({ type: types.EDIT_TODO, todo, title })

export const completeTodo = todo => ({ type: types.COMPLETE_TODO, todo: todo })

export const completeAllTodos = (checkAll) => ({ type: types.COMPLETE_ALL_TODOS, checkAll: checkAll })

export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

export const getDataAPI = () => ({ type: types.GET_DATA_API })

export const getDataAPISuccess = () => ({ type: types.GET_DATA_API_SUCCESS })