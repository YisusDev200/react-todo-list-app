import React from 'react'
import './todoSearch.css'
import { TodoContext } from '../TodoContext'

function TodoSearch() {

    const {
        state,
        setState,
    } = React.useContext(TodoContext)

    return (
        <input
            placeholder='Buscar'
            value={state}
            className='TodoSearch' onChange={
                (event) => {
                    setState(event.target.value)
                }
        } />
    )
}

export {
    TodoSearch
}