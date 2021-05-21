import React from 'react'
import emailjs from 'emailjs-com';
import '../style/contact.css'
import {Link} from 'react-router-dom'


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_guk6ii6', 'template_xt8neef', e.target, 'user_KJK9awC339HCOpTg7SWTZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("your message was delivered")
      }
    return (
        <div className="container contact-section">
            <form onSubmit={sendEmail} className="form-group">
                    <div className="row">
                    <div className="col-lg-7">
                          <label>your name</label>
                         <input required name="name" className="form-control" type="text"  />
                         <label>your email</label>
                         <input name="email" className="form-control" type="text"  />
                         
                    </div>
                    <div className="col-lg-5">
                    <label>Message</label>
                    <textarea name="message" required className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    <button className="btn" >Submit</button>
                    </div>  
                 
                    </div>
              
            </form>

              

            <div className="arrows">
            <div className="left-arrow">
                 <Link to="/projects">   <i class="fas fa-arrow-left"></i>  </Link> 
            </div>
        </div>
        </div>
    )
}

export default Contact
