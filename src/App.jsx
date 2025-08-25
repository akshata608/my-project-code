import './App.css'
//import { Header } from './components/Header'
//import {Footer} from './components/Footer'
import { Header } from './components/Header';
import { Task } from './components/Task';
import { Footer } from './components/footer';
import { AddTask } from './components/AddTask';
import {Form} from './components/Form';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
function App() {
   const [tasks,setTasks] =useState([
          {id:1, name:"react js course",completed:true},
          {id:2, name:"python course",completed:false},
          {id:3, name:"java course",completed:false}]);
  const[flag,setFlag] = useState(false)
 
  return (
            
           <div className='App'>
      
           <Link to='/form' onClick={()=>setFlag(true)}>Form</Link>
          <Routes>
          <Route path="/form" element={<Form />} />  {/* <-- This is required */}
          <Route path="/" element={
          <>
            <Header />
            <main>
            <AddTask tasks={tasks} setTasks = {setTasks}/>
            <Task title="random" tasks={tasks} setTasks = {setTasks}/>
            </main>
            <Footer />
          </>
        } />
      </Routes>
           </div>
          
  )
}

export default App
