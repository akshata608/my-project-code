import React from 'react'
import Logo from '../assets/Logo.jpg'

export const Header = () => {
  return (
    <div>
        <img src={Logo} alt='20' height= '50px'/>
        <h1 style = {{color:"#be3434" ,borderRadius:"10px", border : "10px solid #1222" , padding:"10px"}}>HEADER COMPONET </h1>
        <a href='/' >Home</a>

    </div>

  )
}
