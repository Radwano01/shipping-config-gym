import React from 'react'
import "./facts.scss"
import {FiPhoneCall} from "react-icons/fi"
import {IoIosPeople} from "react-icons/io"
import {AiOutlineStar} from 'react-icons/ai'
import {RiShipLine} from "react-icons/ri"
import {GiAchievement} from "react-icons/gi"

const Facts = () => {
  return (
    <div className='container-facts'>
        <div className="left">
            <h4 className='facts-text'>SOME FACTS</h4>
            <h1>#1 Place To Manage All Of Your <br /> Shipments</h1>
            <h4>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. 
                 Aliqu diam amet diam et eos.<br /> Clita erat ipsum et lorem et sit,
                 sed stet lorem sit clita duo justo magna dolore erat amet
            </h4>
            <div className="contact-facts">
                <span className="left-icon-facts">
                    <FiPhoneCall size={40}/>
                </span>
                <span className="text-icon-facts">
                    <h3>Call for any query!</h3>
                    <h2 className='number'>+012 345 6789</h2>
                </span>
            </div>


        </div>
        <div className="right">
            <div className="con">
                <div className="card" style={{backgroundColor:"brown"}}>
                    <IoIosPeople color='white' size={50}/>
                    <h2>1234</h2>
                    <h3>Happy Clients</h3>
                </div><br />
                <div className="card" style={{backgroundColor:"cyan"}}>
                    <AiOutlineStar color='white' size={50}/>
                    <h2>1234</h2>
                    <h3>Customer Reviews</h3>
                </div>
            </div>
            <br />
            <div className="con">
                <div className="card" style={{backgroundColor:"green"}}>
                    <RiShipLine color='white' size={50}/>
                    <h2>1234</h2>
                    <h3>Complete Shipments</h3>
                </div><br />
                <div className="card" style={{backgroundColor:"purple"}}>
                    <GiAchievement color='white' size={50}/>
                    <h2>1234</h2>
                    <h3>Achievment</h3>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Facts