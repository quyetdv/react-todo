import * as types from './../constants/ActiveType'

let initialState = {
  todos: [],
  currentFilter: 'all'
};

let todos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodos = [
        ...state.todos,
        {
          id: action.todo.id,
          title: action.todo.title,
          isComplete: action.todo.isComplete
        }
      ];

      return {
        ...state,
        todos: newTodos
      };

    case types.DELETE_TODO:
      const todosAfterDelete = state.todos.filter(item => item.id !== action.todo.id);

      return {
        ...state,
        todos: todosAfterDelete
      };

    case types.COMPLETED_TODO:
      const todoAfterCompleted = state.todos.map(item => ({
        ...item,
        isComplete: item.id === action.todo.id ? !item.isComplete : item.isComplete
      }));

      return {
        ...state,
        todos: todoAfterCompleted
      };

    case types.UPDATE_TODO:
      const listTodoUpdated = state.todos.map(item => ({
        ...item,
        title: item.id === action.todo.id ? action.title : item.title
      }));

      return {
        ...state,
        todos: listTodoUpdated
      };

    case types.CLEAR_COMPLETED:
      const listTodoCleared = state.todos.filter(item => !item.isComplete);

      return {
        ...state,
        todos: listTodoCleared
      };

    case types.TOGGLE_COMPLETE_ALL:
      const listTodoToggleCompleteAll = state.todos.map(item => ({
        ...item,
        isComplete: action.checkAll
      }));

      return {
        ...state,
        todos: listTodoToggleCompleteAll
      };

    case types.CHANGE_FILTER:
      return {
        ...state,
        currentFilter: action.filter
      };

    default:
      return state;
  }
};

export default todos;