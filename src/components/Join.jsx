import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./Join.css"

const Join = () => {

    const refreshPage = ()=>{
        window.location.reload();
     }

    const form=useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fytqrrk', 'template_qnff0pl', form.current, 'xPMBNIUMoLWpCK5rH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span>READY TO </span>
                <span className='outline-text' >ELEVATE YOUR</span>
            </div>
            <div>
                <span className='outline-text' >REAL FITNESS </span>
                <span >WITH US ?</span>
            </div>

        </div>
        <div className="right-j">

            <form ref={form} className="email-contain" onSubmit={handleSubmit} >
                <input type="email" name="user-email" placeholder='name@example.com' autoComplete='off' />
                <button onClick={refreshPage} className=' btn btn-join' >Join</button  >
            </form>

        </div>
    </div>
  )
}

export default Join