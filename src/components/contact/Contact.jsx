import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div>
        <div className="left-right-contact">
            <div className="left">
                <h1>Contact Us</h1>
                <h4>Home / Contact</h4>
            </div>
            <div className="right"></div>
        </div>
        <div className="contact">
                <div className="left">
                    <h3>GET IN TOUCH</h3>
                    <h1>Contact For Any Query</h1>
                    <h4>The contact form is currently inactive.
                         Get a functional and working contact form <br /> with Ajax & PHP in a few minutes. Just copy and paste the files,
                         add a little code <br /> and you're done.</h4>
                    <form>
                        <div className="name-email">
                            <input type="name" placeholder='Your Name'/>
                            <input type="email" placeholder='Your Email'/>
                        </div>
                        <div className="number-select">
                            <input type="number" placeholder='Your Mobile'/>
                            <select placeholder='Select A Freight'>
                                <option value="freight-1">freight-1</option>
                                <option value="freight-2">freight-2</option>
                                <option value="freight-3">freight-3</option>
                            </select>
                        </div>
                        <textarea placeholder='Special Note' cols="56" rows="5"></textarea><br />
                        <button>Submit</button>
                    </form>
                </div>
                <div className="right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3000311.8798263595!2d-75.770041!3d42.74622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1692487598029!5m2!1sen!2sbd" style={{width:"600", height:"450", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                </div>
            </div>
    </div>
  )
}

export default Contact