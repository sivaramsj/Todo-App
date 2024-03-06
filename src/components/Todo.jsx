import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";


export const Todo = ({task,deleteTask,editTask}) => {

    function handleDelete(){
        deleteTask(task.id);
    }
    function handleEdit(){
        editTask(task.id);
    }

  return(
    <div className='flex justify-between item-center bg-gray-600 text-white py-3 px-4 rounded-md mb-4 cursor-pointer'>
        <p>{task.task}</p>
        <div className='flex items-ceter gap-x-4'>
            <AiFillEdit className='text-xl' onClick={handleEdit}/>
            <BsFillTrashFill className='text-xl' onClick={handleDelete}/>
        </div>
        
    </div>
  );
}
