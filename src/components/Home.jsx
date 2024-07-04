import React from 'react'
import bgHome from '../assets/Media/bg.png'

const Home = () => {
    return (
        <>
            <main>
                <div className="left">
                    <h1>Start your favourite course</h1>
                    <h2>Now learn from anywhere,and build your bright career</h2>
                    <p>Over 11000 Trusted courses to enroll</p>
                    <button className="btn">Start a course</button>
                </div>
                <div className="right">
                    <img src={bgHome} alt="" />
                </div>
            </main>
        </>
    )
}

export default Home
