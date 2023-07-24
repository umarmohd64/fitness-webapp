import React from 'react'
import './Hero.css'
import Header from './Header'
import {motion} from "framer-motion"
import CountUp from "react-countup"

const Hero = () => {
    const transition= {
        type: "spring",
        duration: 3
    }

        const mobile= window.innerWidth<=768 ?true:false;
        const ipad=   window.innerWidth>=768 && window.innerWidth<=1300 ?true:false;
        const screenWidth= window.innerWidth
        

  return (
    <div className="hero" id='Home-id' >
        <div className="left-h">
                <Header />
                                            {/* ad */}
                <div className="ad">
                    <motion.div
                    // initial={{left: mobile? "90px" : "282px"}}
                    initial= { ()=> {if(screenWidth<=768)
                        return({left: "50%"})

                   else
                   return({left:"65%"})}
         }



                    whileInView={{left: "7px"}}
                    transition= {{...transition, type: "tween", duration: 2.5}}
                    >
                        
                    </motion.div>
                    <span>Your one-stop premium fitness destination!</span>
                </div>

                                         {/* Hero Headingss */}

                <div className="hero-text">
                    <div>
                        <span className='outline-text' >UNLEASH </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>

                    <div>
                        <span>Transform Your Body, Ignite Your Passion, 
                            and Inspire Others with Us!</span>
                    </div>

                </div>

                  <div className="figures">
                    <div> 
                        <span>
                            <CountUp
                                start={0}
                                end={150}
                                duration="4"
                                prefix="+">

                            </CountUp>
                        </span>
                        <span>expert coaches</span>
                    </div>

                    <div>
                        <span>
                            <CountUp
                                start={100}
                                end={1032}
                                duration="3"
                                prefix="+">

                            </CountUp>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <CountUp
                                start={0}
                                end={69}
                                duration="5"
                                prefix="+">

                            </CountUp>
                        </span>
                        <span>fitness programs</span>
                    </div>
                  </div>

                       {/* hero buttons */}
                
                <div className="hero-buttons">
                    <button className='btn' >Get Started</button>
                    <button className='btn' >Learn More</button>
                </div>

        </div>
        <div className="right-h">

            {/* <button className="btn btn-hero">JOIN NOW</button> */}

            <motion.div 
            // initial={ mobile ? {left: "-4rem"} :( ipad ?{right:"23rem"} :{right: "-4rem"})}
            // whileInView={mobile ? {left: "1rem"}: (ipad ? {right:"27rem"}: {right: "5rem"})}

            initial= { ()=> {if(screenWidth<=768)
                            return({left: "-4rem"})
                       else if(screenWidth>768 && screenWidth<=1300)    
                       return({right:"23rem"} )
                       else
                       return({right:"-4rem"})}
             }

             whileInView={ ()=> {if(screenWidth<=768)
                return ({left: "0"})
           else if(screenWidth>768 && screenWidth<=1300)    
           return({right:"27rem"} )
           else
           return({right:"5rem"})}}

            transition={transition}
            
            className="heart-rate">
                <img src="/images/fitness-heart-2.png" alt="" />
                <span>Heart Rate</span>
                <span> 123 bpm </span>
            </motion.div>

            {/* HERO PHOTOS(front+back) */}

            <img className='hero-image' src="/images/hero-main-img.png" alt="" />

            <motion.img

            // initial={ mobile? {left:"5rem"} : {right:"9rem"}}

            initial= { ()=> {if(screenWidth<=768)
                return({left: "10rem"})
           else if(screenWidth>768 && screenWidth<=1300)    
           return({right:"28rem"} )
           else
           return({right:"10rem"})}
 }

            // whileInView={ mobile? {left:"2rem"} :  {right:"22rem"}}

            whileInView={ ()=> {if(screenWidth<=768)
                return ({left: "2rem"})
           else if(screenWidth>768 && screenWidth<=1300)    
           return({right:"33rem"} )
           else
           return({right:"22rem"})}}



            transition={transition}

            className='hero-image-back' src="/images/hero_image_back.png" alt="" />

            {/* calories section */}

        <motion.div 
        initial={ mobile? {left:"4rem"} : {right:"35rem"}}
        whileInView={ mobile? {left:"-1rem"} :  {right:"30rem"}}
        transition={transition}
        
        className="calories">
            <img  className='calories-image' src="/images/calorie-symbol.png" alt="" />
            <div>
            <span>Calories Burned</span>
            <span>247 kcal</span>
            </div>
           
        </motion.div>


        </div>
    </div>
  )
}

export default Hero