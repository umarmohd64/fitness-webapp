import React from 'react'

export default function Card(props){
    return(
    < div className="card">
        {props.image}
        <span className='card-head' > {props.heading}</span>
        <span className='card-des' > {props.description}</span>
    
            <button className='card-btn'>Join Now</button>
    
    </div>

    )
}