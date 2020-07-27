import { combineReducers } from "redux"
import todosReducers from "./todos/todosReducers"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
  todosReducers,
  form: formReducer
})

export default rootReducer
