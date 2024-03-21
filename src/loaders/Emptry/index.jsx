import React from 'react'
import './emptry.css'
import { TodoContext } from '../../todoComponents/TodoContext';
function Emptry() {
  const {
    state,
  } = React.useContext(TodoContext);
  return (
    <div className="container-emptry">
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">{state
          ? "¡Oops! Parece que estamos perdidos."
          : "Crea tu primer TODO"}
        </div>
        <div className="notibody">{state
          ? "Ningún resultado coincide con tu búsqueda"
          : "Organiza tus tareas y mantén el control de lo que necesitas hacer. ¡Es fácil y rápido!"}</div>
      </div>
    </div>
  )
}

export {
  Emptry
}