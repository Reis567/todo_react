import React from 'react'

export const Todo = ()=>{
    return (
        <form className='TodoForm'>
            <input type="text"  className='todo-input' placeholder='Adicione uma tarefa'/>
            <button type='submit' className='todo-btn'></button>
        </form>
    )
}