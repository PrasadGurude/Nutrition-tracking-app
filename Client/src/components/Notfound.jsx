import React from 'react'
import { Link } from 'react-router-dom'



function NotFound() {
  return (
    <section className='container nf'>
          <div className='not-found'>
    <h1>404 | not found</h1>
    <p> <Link to="/login">click Here</Link> for Login</p>
    <p> <Link to="/register">click Here</Link> for Register</p>
    </div>
    </section>
  )
}

export default NotFound