import React from 'react'
import "./aboutsection.scss"
import aboutImg from '../../assets/logisticimages/about.jpg'
import {RiGlobalFill} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"

const AboutSection = () => {
  return (
    <>
        <div className='container-about-section'>
            <div className="left-right">
                <div className="left">
                    <h1>About Us</h1>
                    <h4>Home / About</h4>
                </div>
                <div className="right"></div>
            </div>
        </div>
            <div className="about-section">
                <div className="left-about">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="right-about">
                        <h4 className='about-text'>ABOUT US</h4>
                        <h1>Quick Transport and Logistics <br />Solutions</h1>
                        <h4>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br />
                            Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, <br />
                            sed stet lorem sit clita duo justo magna dolore erat amet
                        </h4>
                        <div className="cards">
                            <div className="card">
                            <RiGlobalFill color='brown' size={60}/>
                            <h3>Global Coverage</h3>
                            <h4>Stet stet justo dolor sed duo. <br />
                                Ut clita sea sit ipsum diam lorem diam justo.</h4>
                            </div>
                            <div className="card">
                                <TbTruckDelivery color='brown' size={60}/>
                                <h3>On Time Delivery</h3>
                                <h4>Stet stet justo dolor sed duo. <br />
                                Ut clita sea sit ipsum diam lorem diam justo.</h4>
                            </div>
                        </div>
                        <button>
                            <a href="/">
                            <h2>Explore More</h2>
                            </a>
                        </button>
                </div> 
            </div>
    </>
  )
}

export default AboutSection