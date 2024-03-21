import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [state, setState] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [isOverFlow, setIsOverFlow] = React.useState(false);
  const [text, setText] = React.useState(""); // Añade esta línea

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const allTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(state.toLowerCase())
  });


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodo(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos)
  }

  return (
    <TodoContext.Provider value={
      {
        loading,
        error,
        completedTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        state,
        setState,
        saveTodo,
        todos,
        allTodos,
        openModal,
        setOpenModal,
        isOverFlow,
        setIsOverFlow,
        text,
        setText
      }
    }>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }