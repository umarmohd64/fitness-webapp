import React from 'react'
import './Programs.css'
import CardsArray from "../data/programsData.js"
import Card from "./ProgCards.jsx"

const Programs = () => {

  const cardData= CardsArray.map( card => {
    return(
    <Card 
    image={card.image} 
    heading={card.heading} 
    description={card.description} 
    />

    )
  }
  )

  return (
    <div className="Programs" id="Programs-id">
      {/* headings */}

      <div className="programs-head">
        <span>Discover our</span>
        <span className='outline-text' >Programmes</span>
        <span>To Shape Yourself</span>
      </div>

      {/* cards */}
      <div className="prog-categories">
        
        {cardData}

      </div>


    </div>
  )
}

export default Programs