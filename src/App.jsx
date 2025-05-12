import React from "react";
import './App.css'
import boyImage from './assets/boy.jpg';

function App(){

  return (
    <div className="main">
      <Navbar/>
      <Content/>
      <Button/>
    </div>
  )
}

function Navbar(){
  return (
    <div className="nav" >
      <h2>Logo</h2>
      <div className="navpart2">
        <h4>Store</h4>
        <h4>Courses</h4>
        <h4>Account</h4>
        <button>Sign Up</button>
        <i class="ri-menu-line"></i>
      </div>
    </div>
  )
}

function  Content(){
  return(
    <div className="content">
    <div className="left"><h1>Learn From <span>Coolest</span> Coding  Platform Of India </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint beatae asperiores, quaerat officiis at tempore veniam placeat quibusdam perspiciatis mollitia reprehenderit autem exercitationem expedita repellat iusto nobis dignissimos alias consequuntur.</p>
    <button>Explore Now</button>
    </div>

    <div className="right">
      <img src={boyImage} alt="boy" />

    </div>
     
    </div>
  )
}

function Button(){
  return (
    <div className="button">
      <button className="startfree">Start for free</button>
      <button className="doc">Documentation</button>
    </div>
  )
}
 


export default App