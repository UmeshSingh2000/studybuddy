import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={props.img} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p>{props.name}</p>
                    {props.star}<i className="fa-solid fa-star"></i>
                    <h3>{props.price}</h3>
                </div>
                <button className="btn">Buy</button>
            </div>
        </>
    )
}

export default Card
