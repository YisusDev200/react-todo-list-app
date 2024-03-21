import React from 'react'
import { TodoContext } from '../../todoComponents/TodoContext'
import './overflow.css'

function OverFlow() {
  const {
    isOverFlow,
    setIsOverFlow,
    text
  } = React.useContext(TodoContext);

  return (
    <>
      <div className="modal">
        <article className="modal-container">
          <header className="modal-container-header">
            <span className="modal-container-title">
              <svg aria-hidden="true" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 2v14h12V4H6zm2 11V9l4 4 4-4v7H8z" fill="currentColor"></path>
              </svg>

            </span>
            <button className="icon-button" onClick={() => {
              setIsOverFlow(!isOverFlow);
            }}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"></path>
              </svg>
            </button>
          </header>
          <section className="modal-container-body rtf">

            <span>{text}</span>

          </section>

        </article>
      </div>
    </>
  )
}

export default OverFlow