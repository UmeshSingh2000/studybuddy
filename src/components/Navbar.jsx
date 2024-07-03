import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h1>
            StudyBuddy
            </h1>
            </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Quiz</a></li>
            <li><a href="#">Room</a></li>
        </ul>
        <div className="register">
            <button className="login">Login</button>
            <button className="signup">Signup</button>
        </div>
    </nav>
  )
}

export default Navbar
