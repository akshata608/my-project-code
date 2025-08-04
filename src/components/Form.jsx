import React from 'react'
import { useState } from 'react'
import './Form.css'
import Logo from '../assets/Logo.jpg'
export const Form = () => {
    const [name, setName] = React.useState('')
    const[submit,setSubmit]=useState(null)
    const A= "H"
    const Sub=(e)=>
    {
        e.preventDefault()
setSubmit({name,A})
    }  
    return (
    <div>
        <form onSubmit={Sub}>
        <labe>First Name</labe>
        <input type="text" placeholder='First Name' onChange={(e)=>setName(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
    {
        submit && <h1>{name},{A}</h1>
    }
     <h1>Flex</h1>
     <div class="flex-container">

  <div class="flex-item" >cat is good at that work but it is very lazy felloe | </div>
  <div class="flex-item" id='box2'> cat is good at that work but it is very lazy felloe |</div>
  <div class="flex-item">cat is good at that work but it is very lazy felloe</div>
</div>
 <h1>Grid</h1>
  <div className='grid-container'>
   
  <div className="grid-item">1</div>
  <div class="grid-item"> 2</div>
  <div class="grid-item">3</div>
   <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
 <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>

</div>
<div className="responsive-box">
      Resize the screen to see the color change!
    </div>
    <img src={Logo} alt='logo' className='logo'/>
    </div>
  )
}
