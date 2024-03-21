import React from 'react'
import './todoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter() {

  const {
    allTodos: totalTodos,
    completedTodos
  } = React.useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      {(completedTodos !== totalTodos || totalTodos === 0)
        ? totalTodos === 0 ? '📝No hay TODOs📝' : <>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</>
        : '🎉Felicidades haz completado todos los TODOs🎉'}
    </h1>
  )
}

export {
  TodoCounter
}