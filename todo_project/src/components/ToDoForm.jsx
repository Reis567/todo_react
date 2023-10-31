import React from 'react'

export const TodoForm = ()=>{
    return (
        <form className='TodoForm'>
            <input type="text"  className='todo-input' placeholder='Adicione uma tarefa ...'/>
            <button type='submit' className='todo-btn'>Adicionar</button>
        </form>
    )
}