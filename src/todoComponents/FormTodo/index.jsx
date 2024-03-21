import React from 'react'
import './formCreateTodo.css'
import { TodoContext } from '../../todoComponents/TodoContext';

function FormCreateTodo() {
  const {
    setOpenModal,
    openModal,
    saveTodo,
    todos,
  } = React.useContext(TodoContext);

  const createTodo = (event) => {
    const newTodos = [...todos];
    newTodos.push({
      text: event.target.textarea.value,
      completed: false,
    });
    saveTodo(newTodos);
  }
  const handleSubmit = (event) => {
    event.preventDefault(event);
    createTodo(event);
    setOpenModal(!openModal); 
  }

  const handleCancel = (event) => {
    event.preventDefault();
    setOpenModal(!openModal);
  }

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="textarea">Escribe un nuevo TODO</label>
            <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
          </div>
          <div className='container-button'>
            <button className="form-submit-btn" onClick={handleCancel}>Cancelar</button>
            <button type="submit" className="form-submit-btn">Añadir</button>
          </div>
        </form>
      </div>
    </>
  )
}

export { FormCreateTodo }