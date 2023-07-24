import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    
    <div className="foot-section">
        <hr />
        <div className="footer">
                <div className="social-media">
                   <a href="https://instagram.com/umaryaarrr?igshid=MzRlODBiNWFlZA=="> <img title='instagram' src="./images/instagram.png" alt="" />  </a> 
                  <a href="https://github.com/umarmohd64"> <img title='github' src="./images/github.png" alt="" />    </a>  
                  <a href="https://www.linkedin.com/in/mohammadumar64/"> <img title="linkedin" src="./images/linkedin.png" alt="" /> </a>  

                </div>
        
            <div className="logo-f">
                <img title='FitFlex Co. Ltd.' src="./images/new-gym-logo.png" alt="" />
            </div>
        </div>
        <div className="copyright">
            <p title="ε-(´・｀) ﾌ [Pheww!]" >© 2023 | Made by Umar </p>



        </div>

        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>

    </div>
  )
}

export default Footer