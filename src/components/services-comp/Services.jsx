import React from 'react'
import "./services.scss"
import servicesOne from "../../assets/logisticimages/service-1.jpg"
import servicesTwo from "../../assets/logisticimages/service-2.jpg"
import servicesThree from "../../assets/logisticimages/service-3.jpg"
import servicesFour from "../../assets/logisticimages/service-4.jpg"
import servicesFive from "../../assets/logisticimages/service-5.jpg"
import servicesSix from "../../assets/logisticimages/service-6.jpg"

const Services = () => {
  return (
    <div className='container-services'>
        <div className="services">
            <h4>OUR SERVICES</h4>
            <h1>Explore Our Services</h1>
        </div>
        <div className="cards">
            <div className="card">
                <img src={servicesOne} alt="" />
                <h2>Air Freight</h2>
                <h5>Stet stet justo dolor sed duo. <br /> Ut clita sea sit ipsum diam lorem diam.</h5>
                <button>Read More</button>
            </div>
            <div className="card">
                <img src={servicesTwo} alt="" />
                <h2>Ocean Freight</h2>
                <h5>Stet stet justo dolor sed duo. <br /> Ut clita sea sit ipsum diam lorem diam.</h5>
                <button>Read More</button>
            </div>

        </div>
        <div className="cards">
            <div className="card">
                <img src={servicesThree} alt="" />
                <h2>Road Freight</h2>
                <h5>Stet stet justo dolor sed duo. <br /> Ut clita sea sit ipsum diam lorem diam.</h5>
                <button>Read More</button>
            </div>
            <div className="card">
                <img src={servicesFour} alt="" />
                <h2>Train Freight</h2>
                <h5>Stet stet justo dolor sed duo. <br /> Ut clita sea sit ipsum diam lorem diam.</h5>
                <button>Read More</button>
            </div>
        </div>
        <div className="cards">

            <div className="card">
                <img src={servicesFive} alt="" />
                <h2>Customs Clearance</h2>
                <h5>Stet stet justo dolor sed duo. <br /> Ut clita sea sit ipsum diam lorem diam.</h5>
                <button>Read More</button>
            </div>
            <div className="card">
                <img src={servicesSix} alt="" />
                <h2>Warehouse Solutions</h2>
                <h5>Stet stet justo dolor sed duo. <br /> Ut clita sea sit ipsum diam lorem diam.</h5>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Services