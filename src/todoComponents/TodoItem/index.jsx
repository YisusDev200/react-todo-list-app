import './todoItem.css'
import { FaCheck } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import { TodoContext } from '../TodoContext'
import React from 'react'
function TodoItem({ text, completed, onCompleted, onDelete }) {
    const {
        isOverFlow,
        setIsOverFlow,
        setText
    } = React.useContext(TodoContext);
    return (
        <li className='TodoItem'>
            <span
                onClick={onCompleted}
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
                <FaCheck />
            </span>
            <p onClick={
                () => {
                    console.log(text)
                    setIsOverFlow(!isOverFlow);
                    setText(text);
                }
            } className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <span
                onClick={onDelete}
                className='Icon Icon-delete'>
                <FiDelete />
            </span>
        </li>
    )
}

export { TodoItem }