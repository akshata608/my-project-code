import React from 'react'

export const TaskCard = ({t,deleteRow,title}) => {
  return (
    <div>               
     <li  className={t.completed ? "complete" : "incomplete"}>
    <span>{t.id} -   {t.name} {title}</span>
    <button onClick={()=>deleteRow(t.id)} className='delete'>Delete</button>

  </li>
  </div>
  )
}
