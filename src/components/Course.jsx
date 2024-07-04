import React from 'react'
import Cards from './Card'
import img1 from '../assets/Media/Black and Green Simple Business Youtube Thumbnail.png'
import img2 from '../assets/Media/Blue Modern Eye Catching Vlog YouTube Thumbnail.png'
import img3 from '../assets/Media/Gradient Modern Business Youtube Thumbnail.png'
import img4 from '../assets/Media/Blue Bold Modern Business YouTube Thumbnail.png'
import img5 from '../assets/Media/Blue Gradient Modern Freelancer YouTube Thumbnail .png'
import img6 from '../assets/Media/6.png'
import PlanCard from './PlanCard'

const Course = () => {

    return (
        <>
            <div className="Course">
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
                    <div className="planContainer">
                        <PlanCard title="Personal Plan" subtitle="For You" price="Starting at ₹850 per month" priceDetails="Billed monthly or annually. Cancel anytime." feature1="Access to 11,000+ top courses" feature2="Certification prep" feature3="Goal-focused recommendations" feature4="AI-powered coding exercises" />
                        <PlanCard title="Team Plan" subtitle="For your team" price="₹1,167 a month per user" priceDetails="Billed annually. Cancel anytime." feature1="Access to 11,000+ top courses" feature2="Team progress tracking" feature3="Customizable learning paths" feature4="Advanced reporting and analytics" />
                        <PlanCard title="Enterprise Plan" subtitle="For your whole organization" price="Contact sales for pricing" priceDetails="Billed annually. Cancel anytime." feature1="Access to 11,000+ top courses" feature2="24/7 premium support" feature3="Custom onboarding and training" feature4="Enterprise-grade security and compliance" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
