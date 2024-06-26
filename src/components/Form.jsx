import React, { useState } from 'react'

export const Form = ({addTask}) => {
    const[value,setValue]= useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className='mb-4 font-primary w-full'>
            <input type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='What task do you have today?'
            onChange={(e)=>{setValue(e.target.value)}} value={value}/>
            <button onSubmit={handleSubmit} className='bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2'>Add Task</button>
        </form>
    )
}
