import React, { useState } from 'react'
import { Form } from './Form';
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid'
import { Edit } from './Edit';

export const Todolist = () => {
    const [todoValue,setTodoValue] = useState([])

    const addTask=(todo)=>{
        setTodoValue([...todoValue,{id:uuidv4(),task:todo,isEditing:false}]);
        console.log(todoValue)
    }

    const deleteTask=(id)=>{
        const filtered=todoValue.filter((todo)=>todo.id!==id);
        setTodoValue(filtered);
    }

    const editTask=(id)=>{
        setTodoValue(todoValue.map((todo)=> todo.id === id ? {...todo,isEditing:!todo.isEditing}: todo));  
        // console.log(todoValue)         
    }

    const editTodo=(task,id)=>{
           setTodoValue(todoValue.map((todo)=>todo.id===id ? {...todo,task,isEditing:!todo.isEditing} : todo));
    }

    return (
        // <div className='container bg-gray-700 mt-20 p-8 rounded-md'>
        <div className='container mx-auto bg-gray-700 mt-20 p-8 rounded-md shadow-lg sm:max-w-md lg:max-w-lg xl:max-w-2xl'>
            <Form addTask={addTask}/>
            {
                todoValue.map((todo,idx)=>{
                    return todo.isEditing ? (
                         <Edit editTodo={editTodo} task={todo}/>
                    ):(
                        <Todo key ={idx} task={todo} deleteTask={deleteTask} editTask={editTask}/>
                    )
                })
            }
        </div>
    )
}
