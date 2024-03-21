import { TodoContext } from '../TodoContext';
import './createTodoButton.css'
import React from 'react';

function CreateTodoButton() {
    const {
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext);
    return (
        <button
            onClick={() => setOpenModal(!openModal)}
            className='CreateTodoButton'>+</button>
    )
}

export { CreateTodoButton } 