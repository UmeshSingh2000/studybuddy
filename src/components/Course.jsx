import React from 'react'
import Cards from './Card'
import img1 from '../assets/Media/Black and Green Simple Business Youtube Thumbnail.png'
import img2 from '../assets/Media/Blue Modern Eye Catching Vlog YouTube Thumbnail.png'
import img3 from '../assets/Media/Gradient Modern Business Youtube Thumbnail.png'
import img4 from '../assets/Media/Blue Bold Modern Business YouTube Thumbnail.png'
import img5 from '../assets/Media/Blue Gradient Modern Freelancer YouTube Thumbnail .png'
import img6 from '../assets/Media/6.png'

const Course = () => {
    
    return (
        <>
            <h1>All the skills you need in one place</h1>
            <h2>From critical skills to technical topics, StudyBuddy supports your professional development.</h2>
            <div className="courses">
                <Cards img={img1} title="The Complete 2024  Web Development" name="Dr.Sourabh Sharma,Developer" star="5" price="Free" />
                <Cards img={img2} title="The Web Development Bootcamp 2024" name="Colt Steele" star="4.5" price="₹3,499" />
                <Cards img={img3} title="Web Development Master Class 2024" name="Creative Online School" star="4.3" price="₹3,699" />
                <Cards img={img4} title="DevOps-Beginner To Advance 2024" name="Dr Pradeep Kumar" star="5" price="₹1" />
                <Cards img={img5} title="2024 Power Bi Bootcamp By Sammed sanjay Pradhane 2024" name="Sanjay Pradhane" star="4.3" price="₹3,699" />
                <Cards img={img6} title="Earn Passive Income in 2024-Easy" name="Creative Online School" star="4.1" price="₹5,699" />
            </div>
            <div className='plan'>
                <h1>Choose a plan for success</h1>
                <h3>Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.</h3>
            </div>
        </>
    )
}

export default Course
