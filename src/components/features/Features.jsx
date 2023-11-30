import React from 'react'
import "./features.scss"
import featureImg from "../../assets/logisticimages/feature.jpg"
import {RiGlobalFill} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"
import {FiPhoneCall} from "react-icons/fi"


const Features = () => {
    return (
        <div className='container-feature'>
          <div className="left">
                <h4 className='feature-text'>OUR FEATURES</h4>
                <h1>We Are Trusted Logistics <br /> Company Since 1990</h1>
                <div className="cards-feature">
                    <div className="card">
                        <RiGlobalFill color='brown' size={50}/>
                        <h3>Worldwide Service</h3>
                        <h4>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita <br /> duo justo magna erat amet</h4>
                    </div><br />
                    <div className="card">
                            <TbTruckDelivery color='brown' size={50}/>
                            <h3>On Time Delivery</h3>
                            <h4>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita <br /> duo justo magna erat amet</h4>
                    </div><br />
                    <div className="card">
                        <FiPhoneCall color='brown' size={50}/>
                        <h3>On Time Delivery</h3>
                        <h4>Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita <br /> duo justo magna erat amet</h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={featureImg} alt="" />
            </div>
        </div>
      )
}

export default Features