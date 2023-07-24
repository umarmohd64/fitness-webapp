import React from 'react'
import plansDataArray from "../data/plansData.js"
import PlanCard from "./PlanCards.jsx"
import "./Plans.css"

const Plans = () => {

    const plansDataMap= plansDataArray.map( plan =>{
        return(
            <PlanCard 

            icon={plan.icon} 
            name={plan.name} 
            price={plan.price} 
            feature={plan.features} 

            />
        )
    } )

  return (
    <div className='planSection' id='Plans-id' >
        <div className="blur plan-blur1"></div>
        <div className="blur plan-blur2"></div>
        <div className="plan-head">
            <span className='outline-text' >GET READY TO</span>
            <span>START YOUR JOURNEY</span>
            <span className='outline-text' >WITH US</span>
        </div  > 
        <div className="plan-container">
        {plansDataMap}
        </div>

  

        </div>


 
  )
}

export default Plans