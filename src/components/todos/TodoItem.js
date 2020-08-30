import React, {useState} from 'react';
import {ENTER_KEY_CODE} from "../../constant";

const TodoItem = ({completeTodo, deleteTodo, editTodo, item}) => {
    const [edit, setEdit] = useState(false);
    const [newContent, setNewContent] = useState(item.title);

    const completeItem = () => {
        if (typeof completeTodo === 'function') {
            completeTodo(item)
        }
    }
    const handleDelete = () => {
        if (typeof deleteTodo === 'function') {
            deleteTodo(item)
            console.log('hey, change here')
        }
    }
    const isEditItem = () => {
        setEdit(true)
        console.log('hey, change edit')
    }

    const handleFinishEditItem = (event) => {
        event.preventDefault()
        if (event.keyCode === ENTER_KEY_CODE) {
            editTodo(item, newContent)

            setEdit(false)
        }
    }

    const onItemChange = (event) => {
        const value = event.target.value;

        setNewContent(value)
    }

    const renderContent = () => {
        if (!edit) {
            return <p onDoubleClick={isEditItem}>{newContent}</p>
        }

        return (
            <input
                className='input-edit'
                defaultValue={newContent}
                onChange={onItemChange}
                onKeyUp={handleFinishEditItem}
            />
        )
    }

    return (
        <li className={`todo-item ${item.isComplete ? 'completed' : 'item'}`}>
            <input type="checkbox" checked={item.isComplete} onChange={completeItem}/>

            {renderContent()}

            <button className="btn-delete" onClick={handleDelete}> X</button>
        </li>
    )
}

export default TodoItem