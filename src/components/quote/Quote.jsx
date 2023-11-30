import React from 'react'
import "./quote.scss"
import {FiPhoneCall} from "react-icons/fi"

const Quote = () => {
    return (
        <div className='container-quote'>
            <div className="left">
                <h4 className='quote-text'>GET A QUOTE</h4>
                <h1>Request A Free <br /> Quote</h1>
                <h3 className='content'>Tempor erat elitr rebum at clita. Diam dolor <br /> diam ipsum sit.
                    Aliqu diam amet diam et eos.<br /> Clita erat ipsum et lorem et sit,
                    sed stet lorem <br /> sit clita duo justo erat amet</h3>
                <div className="contact-quote">
                    <span className="left-icon-quote">
                        <FiPhoneCall size={40}/>
                    </span>
                    <span className="text-icon-quote">
                        <h3>Call for any query!</h3>
                        <h2 className='number'>+012 345 6789</h2>
                    </span>
                </div>
            </div>
            <div className="right">
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
        </div>
      )
}

export default Quote