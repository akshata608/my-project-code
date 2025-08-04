import React from 'react'
import { useState } from 'react'
import { TaskCard } from './TaskCard';

export const Task = (props) => {
     const [count,setCount] = useState(0)
      const [tasks,setTasks] =useState([{id:1, name:"react js course",completed:true},
        {id:2, name:"python course",completed:false},
        {id:3, name:"java course",completed:false}]);
        const [show, setShow] = useState(true);
    
    
    
      const handleAdd =()=> setCount(count+1)
      const handleSub =()=> setCount(count-1)
    
      function deleteRow(id)
      {
        setTasks(tasks.filter(t => t.id != id))
      }
    console.log(show)
    const style = {
      border:"2px solid",
      borderColor : show ? "#3D8361" : "#be3434",
      borderRadius:"50px",
      padding:"10px"

    }
    
  return (
    <div>
        <div className='box'>
              <p>{count}</p>
              <button onClick={handleAdd} className='Add'>ADD</button>
              <button  onClick={handleSub} className='Sub'>SUB</button>

            </div>
            <h1> Task list {props.title}</h1>
             <div class="center-container">
            <button className='trigger' onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"}</button> 
            </div>
            {show && 
             <ul>
               
             {
              tasks.map((t,i)=><TaskCard t={t}  deleteRow ={deleteRow} kay={t.id} title = {props.title}/>) //prop driling
             }
              </ul>

            }
           


    </div>
  )
}
