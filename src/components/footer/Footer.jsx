import React from 'react'
import "./footer.scss"
import {AiOutlineRight} from  "react-icons/ai"

const Footer = () => {
  return (
    <>
      <div className='container-footer'>
        <div className="sections">
          <div className="section">
            <h1>Address</h1>
            <a href="/"><h5><AiOutlineRight/> 123 Street, New York, USA</h5></a>
            <a href="/"><h5><AiOutlineRight/> +012 345 67890</h5></a>
            <a href="/"><h5><AiOutlineRight/> info@example.com</h5></a>
          </div>
          <div className="section">
            <h1>Services</h1>
            <a href="/"><h5><AiOutlineRight/> Air Freight</h5></a>
            <a href="/"><h5><AiOutlineRight/> Sea Freight</h5></a>
            <a href="/"><h5><AiOutlineRight/> Road Freight</h5></a>
            <a href="/"><h5><AiOutlineRight/> Logistic Freight</h5></a>
            <a href="/"><h5><AiOutlineRight/> Industry Solutions</h5></a>
          </div>
          <div className="section">
            <h1>Quick Links</h1>
            <a href="/"><h5><AiOutlineRight/> About Us</h5></a>
            <a href="/"><h5><AiOutlineRight/> Contact Us</h5></a>
            <a href="/"><h5><AiOutlineRight/> Our Services</h5></a>
            <a href="/"><h5><AiOutlineRight/> Terms & Condition</h5></a>
            <a href="/"><h5><AiOutlineRight/> Support</h5></a>
          </div>
          <div className="section">
            <h1>Newletter</h1>
            <h5>Dolor amet sit justo amet elitr clita <br /> ipsum elitr est.</h5>
            <form>
              <input type="email" placeholder='Your Email'/>
              <button>SignUp</button>
            </form>
          </div>
        </div>
        <hr />
        <h4>© Your Site Name, All Right Reserved.</h4>
      </div>
      
    </>
  )
}

export default Footer