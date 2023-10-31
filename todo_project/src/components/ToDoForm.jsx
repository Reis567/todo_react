import React, {useState} from 'react'

export const TodoForm = ()=>{
    const [value, setValue] = useState("")
    return (
        <form className='TodoForm'>
            <input type="text"  className='todo-input' placeholder='Adicione uma tarefa ...' onChange={(e)=> console.log(e.target.value)}/>
            <button type='submit' className='todo-btn'>Adicionar</button>
        </form>
    )
}