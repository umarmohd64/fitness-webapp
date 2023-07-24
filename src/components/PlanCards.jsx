import React from 'react'

export default function PlanCards(props){
    const features= props.feature.map(
        feature => {
            return(
                <div className='each-feature' >
                      <img  className='white-tick' src="./images/ticked-white.svg" alt="" />
                     <span>{feature}</span>

                </div>
              
            )
        }
    )
    return(
        <main className='each-plan-card'>
            {props.icon}
            <span className='plan-name' >{props.name}</span>
            <span className='plan-price' >{props.price}</span>



        <div className="plan-features">
            {features}
        </div>

        <div className='see-more' >
            <span>See More Benifits</span> <span> → </span>
        </div>

        <button className='btn' >Join Now</button>
        
        </main>
   

    )
}