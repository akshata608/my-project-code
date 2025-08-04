import React from 'react'
import { useState } from 'react'
import"./AddTask.css"



export const AddTask = () => {
    const[taskValue,setTaskValue] = useState("")
    const[progress,setProgress] = useState(false)

const handleSubmit =(event)=>
{
  event.preventDefault();
   console.log(progress)
  const task= {
    id: Math.floor(Math.random() * 100000),
    name: taskValue,
    completed: progress
  }
  console.log("task is:", task)
  setTaskValue("")

}
  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}> 
            <label htmlFor='task'>Task Name:</label>
            <input onChange={(e)=>setTaskValue(e.target.value)} type='text' name='task' id='task' placeholder='add task' value={taskValue} autoComplete='off'/>
            <select onChange={(e)=>setProgress(e.target.value)} value={progress}> 
              <option value={false}>Pending</option>
              <option value={true}>Complted</option>
            </select>
            <button type='submit'>Add Task</button> 
            <span onClick={()=>setTaskValue("")} className='reset'>Reset</span>      
        </form>
        <p>{taskValue}</p>

    </section>
  )
}
