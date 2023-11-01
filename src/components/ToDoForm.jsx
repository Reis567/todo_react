import React, {useState} from 'react'

export const TodoForm = ({addTodo})=>{
    
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if(value.trim()!== ''){

            addTodo(value)
            setValue("")
        }
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" value={value}  className='todo-input' placeholder='Adicione uma tarefa ...' onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Adicionar</button>
        </form>
    )
}