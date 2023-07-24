import React, {useState} from 'react'
import './Testimonials.css'
import TestimonialData from "../../data/testimonialsData"
import {motion} from "framer-motion"

const Testimonials = () => {

        const [onScreen, setOnScreen]= useState(0);
        const testLength= TestimonialData.length;

        const transition= {type: "spring", duration:2}

  return (
    <div className="testimonials" id='Testimonials-id'>
        <div className="left-t">

            <span>Testimonials</span>
            <span className='outline-text' >WHAT THEY</span>
            <span>SAY ABOUT US</span>
            
            <motion.span
                       key={onScreen}
                       initial={{opacity:0, x:120}}
                       animate={{opacity:1, x:0}}
                       exit={{opacity:0, x:-120}}
                       transition={transition}
            
            className='t-review' >
              "{TestimonialData[onScreen].review}"
            </motion.span>

            <span>
                    <span className='t-name' style={ {color: "orange", fontWeight:"bold" } } >
                         {TestimonialData[onScreen].name} {"  "}
                    </span>
                    -{TestimonialData[onScreen].status}
            </span>
            

        </div>

        <div className="right-t">
            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={transition}
            > </motion.div>

            <motion.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={transition}
            > </motion.div>

            <motion.img
            key={onScreen}
            initial={{opacity:0, x:120}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-120}}
            transition={transition}
            
            className='t-photo' src= {TestimonialData[onScreen].image} alt="" />

            <div className="arrows">
                <img src="./images/leftArrow.png" alt=""
                onClick={ () => {
                    onScreen===0?setOnScreen(testLength-1):
                    setOnScreen( prevOnScreen => (prevOnScreen-1) )

                }
                      
                }
                />
                <img src="./images/rightArrow.png" alt="" 
                onClick={ () => {
                    onScreen===(testLength-1)?setOnScreen(0):
                    setOnScreen( prevOnScreen => (prevOnScreen+1)  )

                }
                    
                }
                
                />
            </div>
        </div>

    </div>
  )
}

export default Testimonials