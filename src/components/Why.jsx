import React from 'react'
import "./Why.css"

const Why = () => {
  return (
    <div className="reasons" id='Why-id' >
        <div className="left-r">
            <img src="./images/image1.png" alt="" />
            <img src="./images/image2.png" alt="" />
            <img src="./images/image3.png" alt="" />
            <img src="./images/image4.png" alt="" />

        </div>
        <div className="right-r">
            <div className='why-head'>
                <span className='outline-text' > Why </span>
                <span> Choose Us ?</span>
            </div >

                <div className='details' > 
                    <div className='points' >
                        <img src="./images/ticked.svg" alt="" />
                        <span>Over 150+ Certified Trainers</span>
                    </div>

                    <div  className='points'  >
                        <img src="./images/ticked.svg" alt="" />
                        <span>1 Free Program for new member</span>
                    </div>

                    <div className='points' >
                        <img src="./images/ticked.svg" alt="" />
                        <span>Comprehensive Class Offerings</span>
                    </div>

                    <div className='points' >
                        <img src="./images/ticked.svg" alt="" />
                        <span>Customized Training Programs</span>
                    </div>

                    <div className='points' >
                        <img src="./images/ticked.svg" alt="" />
                        <span>Results-Driven Success Stories</span>
                    </div>

                    <span  className='brand-head'>
                    OUR BRAND PARTNERS
                    </span>

                    <div className="brands">
                        <img src="./images/adidas.svg" alt="" />
                        <img src="./images/nb.svg" alt="" />
                        <img src="./images/nike.svg" alt="" />
                        <img src="./images/ua.svg" alt="" />
                    </div>
                
                </div>

             

        </div>
    </div>
  )
}

export default Why