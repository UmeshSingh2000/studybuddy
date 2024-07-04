import React from 'react'

const PlanCard = (props) => {
    return (
        <div className='planCard'>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <h2>{props.price}</h2>
            <p>{props.priceDetails}</p>
            <button className="subscribe">Start subscription <i className="fa-solid fa-arrow-right"></i></button>
            <ul>
                <li><i className="fa-solid fa-circle-check"></i>{props.feature1}</li>
                <li><i className="fa-solid fa-circle-check"></i>{props.feature2}</li>
                <li><i className="fa-solid fa-circle-check"></i>{props.feature3}</li>
                <li><i className="fa-solid fa-circle-check"></i>{props.feature4}</li>
            </ul>
        </div>
    )
}

export default PlanCard
