import React from 'react'
import img1 from '../assets/Media/user1.jpg'
import img2 from '../assets/Media/user2.jpg'

const Testimonial = () => {
  return (
    <section className="testimonial">
        <h1>Student Thoughts</h1>
        <p>Voices of Success</p>
        <div className="container">
            <div className="testimonial_col">
                <img src={img1} alt="" />
                <div>
                    <p>Enrolling in this program was the best decision I ever made. The comprehensive curriculum and hands-on projects provided me with the skills and confidence to pursue a career in web development. The instructors were incredibly supportive, always willing to go the extra mile to help me understand complex concepts. Thanks to their guidance, I was able to land my dream job shortly after graduation. I highly recommend this program to anyone looking to break into the tech industry</p>
                    <h3>Christine Noland</h3>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
            <div className="testimonial_col">
                <img src={img2} alt="" />
                <div>
                    <p>This program exceeded all my expectations. The blend of theoretical knowledge and practical application gave me a deep understanding of web development. The community of learners and the supportive faculty created an environment where I felt encouraged to ask questions and push my boundaries. After completing the course, I felt fully prepared to tackle real-world challenges, and I am now confidently contributing to exciting projects at my new job. This experience has been truly transformative.</p>
                    <h3>Alex Johnson</h3>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
