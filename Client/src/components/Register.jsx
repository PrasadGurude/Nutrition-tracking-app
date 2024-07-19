import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Register = () => {

  const [userDetails , setUserDetails]=useState({
    name:"",
    email:"",
    password:"",
    age:""})

    const [message , setMessage] =useState({
      type:"",
      text:""
    })

    function handleInput(e){
      setUserDetails((prev)=>{
        return ({...prev,[e.target.name]:e.target.value})
      })
    }

    function handleSubmit(e){
      e.preventDefault();
      console.log(userDetails);
      fetch("http://localhost:8000/register",{
        method:"POST",
        body:JSON.stringify(userDetails),
        headers:{
          "content-Type":"application/json"
        }
      }).then((response)=>{
        response=response.json()
      })
      .then((data)=>{
        setUserDetails({
          name:"",
          email:"",
          password:"",
          age:""
        })
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  return (
    <div>
        <section className='container'>
        <form action=""  className='form' onSubmit={handleSubmit} >
        <h1>This is registration page</h1>

        <input className='inp' type="text" required placeholder='Enter your name' name='name' onChange={handleInput} value={userDetails.name}/>
        <input className='inp' type="email" required placeholder='Enter Email Id' name='email' onChange={handleInput} value={userDetails.email} />
        <input className='inp' type="password" required placeholder='Enter password' name='password' onChange={handleInput} value={userDetails.password} />
        <input className='inp' type="number" required placeholder='Enter your age' name='age' onChange={handleInput} value={userDetails.age}/>

        <button className='btn' >JOIN</button>

        <p>Already Registered ? <Link to="/login">Login Now</Link> </p>

        <p>{message.text}</p>
        </form>

        </section>
    </div>
  )
}

export default Register