import React, { useState } from "react"
import arrow from "../../arrow.svg"
import TodoForm from "./TodoForm"

const Header = ({ addTodo, completeAllTodos, arrowShow }) => {
  const [checkAllComplete, setCheckAllComplete] = useState(true)

  const toggleCompleteAllTodos = () => {
    completeAllTodos(checkAllComplete)
    setCheckAllComplete(!checkAllComplete)
  }

  const handleSubmit = value => {
    if (value.title === undefined || !value.title.trim()) return

    const item = {
      title: value.title,
      isComplete: false
    }
    addTodo(item)
  }

  const renderArrow = () => {
    return arrowShow ? <img src={arrow} alt="check all" /> : null
  }
  return (
    <li className="header">
      <button onClick={toggleCompleteAllTodos} className={`${checkAllComplete ? "active" : ""}`}>
        {renderArrow()}
      </button>
      {/*redux-form*/}
      <TodoForm onSubmit={handleSubmit} />
    </li>
  )
}
export default Header
