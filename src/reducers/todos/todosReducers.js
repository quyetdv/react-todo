import { COMPLETE_ALL_TODOS, CLEAR_COMPLETED, SET_VISIBILITY_FILTER, GET_DATA_API_SUCCESS } from "../../constants/ActionTypes"

const initialState = {
  todos: [],
  currentFilter: "all"
}

export default function todosReducers(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_ALL_TODOS:
      const listTodoToggleCompleteAll = state.todos.map(item => ({
        ...item,
        isComplete: action.checkAll
      }))

      return {
        ...state,
        todos: listTodoToggleCompleteAll
      }
    case CLEAR_COMPLETED:
      const listTodoCleared = state.todos.filter(item => !item.isComplete)

      return {
        ...state,
        todos: listTodoCleared
      }
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        currentFilter: action.filter
      }
    case GET_DATA_API_SUCCESS: //saga get api
      const listTodo = action.res.data
      return {
        ...state,
        todos: listTodo
      }
    default:
      return state
  }
}
