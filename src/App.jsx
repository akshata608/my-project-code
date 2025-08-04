import './App.css'
//import { Header } from './components/Header'
//import {Footer} from './components/Footer'
import { Header } from './components/Header';
import { Task } from './components/Task';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import {Form} from './components/Form';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
function App() {
  const[flag,setFlag] = useState(false)
 
  return (
            
           <div className='App'>
      
           <Link to='/form' onClick={()=>setFlag(true)}>Form</Link>
             <Routes>
  <Route path="/form" element={<Form />} />  {/* <-- This is required */}
   <Route path="/" element={
          <>
            <Header />
            <AddTask />
            <Task title="random" />
            <Footer />
          </>
        } />
      </Routes>
           </div>
          
  )
}

export default App
