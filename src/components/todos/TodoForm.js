import React from "react"
import { Field, reduxForm } from "redux-form"
import { ENTER_KEY_CODE } from "../../constant"

const TodoForm = props => {
  const { handleSubmit, reset } = props
  const addTodo = e => {
    console.log('quwyeiu129738918237')
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault()
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" placeholder="What need to be done?" component="input" type="text" onKeyUp={addTodo} />
    </form>
  )
}

export default reduxForm({
  form: "todo"
})(TodoForm)
