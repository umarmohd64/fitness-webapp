import React, {useState} from 'react'
import './Header.css'
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {

    const mobile= window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened]= useState(false)

  return (
    <div className="header">
        <img title='FitFlex Co. Ltd.' src="./images/new-gym-logo.png" className='logo' alt="logo" />

          { (menuOpened===false && mobile===true)
          
            ? 
            
            (
            <div className='burger-menu-btn'
            onClick={()=> setMenuOpened(true)} > 
            <img src="./images/bars.png" alt="" />
            </div> 
            ) 

            : 
            
            ( 
                        
              <ul className='header-menu' >
                  <li>
                    <Link
                    onClick={()=> setMenuOpened(false)}
                    activeClass='active'
                      to='Home-id'
                      spy={true}
                      smooth={true}> Home 
                    </Link> 
                  </li>

                  <li>
                    <Link
                     onClick={()=> setMenuOpened(false)}
                        to='Programs-id'
                        spy={true}
                        smooth={true} 
                        offset={-50}
                      > Programs 
                    </Link>
                  </li>

                  <li>
                    <Link
                    onClick={()=> setMenuOpened(false)}
                          to='Why-id'
                          spy={true}
                          smooth={true}
                          offset={-50} > Why us?
                    </Link>
                    </li>

                    <li>
                      <Link
                      onClick={()=> setMenuOpened(false)}
                          to='Plans-id'
                          spy={true}
                          smooth={true}> Plans
                      </Link>
                    </li>

                    <li  >
                        <Link
                        onClick={()=> setMenuOpened(false)}
                        to='Testimonials-id'
                        spy={true}
                        smooth={true}
                        >Testimonials 
                        </Link>
                    </li>
                </ul> 
              ) 
      }

   
    </div>
  )
}

export default Header