import React from 'react'
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from '../todoComponents';
import { Loading } from '../loaders/Loading';
import { TodoContext } from "../todoComponents/TodoContext";
import { Modal } from '../todoComponents/Modal';
import { FormCreateTodo } from '../todoComponents/FormTodo';
import { Emptry } from '../loaders/Emptry';
function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        state,
        openModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <Loading />}
                {error && <p> Error al cargar los todos</p>}
                {/* {(!loading && searchedTodos.length === 0) && (
                    <p>{state ? 'Ningun todo coincidio con tu busqueda' : 'Crea tu primer TODO'}</p>
                )} */}
                {(!loading && searchedTodos.length === 0) && <Emptry/>}

                {
                    searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onCompleted={() => {
                                completeTodo(todo.text)
                            }}
                            onDelete={() => {
                                deleteTodo(todo.text)
                            }}
                        />
                    ))
                }
            </TodoList>
            <CreateTodoButton />
            {openModal && (
                <Modal>
                    <FormCreateTodo />
                </Modal>
            )}
        </React.Fragment>
    );
}
export {
    AppUI
}
