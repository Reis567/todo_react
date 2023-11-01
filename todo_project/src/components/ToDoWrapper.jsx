import React, {useState} from 'react'
import { TodoForm } from './ToDoForm';
import { Todo } from './ToDo';
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditToDoForm';
uuidv4();


export const TodoWrapper = ()=>{
    const [todos, setTodos] = useState(() => {
        // Tente recuperar os todos do localStorage, ou use um array vazio se não houver nada lá.
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        return storedTodos;
      });

      const addTodo = (todo) => {
        const newTodo = {
          id: uuidv4(),
          task: todo,
          completed: false,
          isEditing: false,
        };
        setTodos([...todos, newTodo]);
    
        // Salvar os todos no localStorage
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
      };
    const toggleComplete = id =>{
        setTodos(todos.map(todo=> todo.id === id ? {...todo, completed: !todo.completed} : todo
            ))
    }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo=> todo.id !== id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo=> todo.id === id ? {... todo, isEditing: !todo.isEditing }:todo))
    }
    const editTask = (task,id)=>{
        setTodos(todos.map(todo=> todo.id === id ? {... todo,task,isEditing : !todo.isEditing}: todo))
    }


    return (
        <div className='TodoWrapper'>
            <h1 className='title-main'>
                ReactList
            </h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>(
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo}/>
                ) :(

                    <Todo task={todo} key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo}/>
                )

            ))}
        </div>
    )
}