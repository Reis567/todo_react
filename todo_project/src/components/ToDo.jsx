import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete, deleteTodo,editTodo})=>{
    return (
        <div className='Todo'>
            <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
            <div>
            <FontAwesomeIcon className="edit-icon" icon={faFilePen} onClick={()=>editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=>deleteTodo(task.id)} />
            </div>
        </div>
    )
}