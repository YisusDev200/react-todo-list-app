import React from 'react'
import './todoList.css'
import { TodoContext } from '../../todoComponents/TodoContext'
import { Modal } from '../Modal'
import OverFlow from '../../loaders/OverFlow';

function TodoList({ children }) {
    const {
        isOverFlow
    } = React.useContext(TodoContext);
    
    return (
        <>
            <ul className="TodoList">
                {children}
            </ul>
            {isOverFlow && (
                <Modal>
                    <OverFlow />
                </Modal>
            )}</>

    )
}

export {
    TodoList
} 