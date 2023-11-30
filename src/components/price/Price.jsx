import React from 'react'
import "./price.scss"
import {AiOutlineCheck} from "react-icons/ai"

const Price = () => {
  return (
    <div className='container-price'>
        <div className="price">
            <h4>PRICING PLAN</h4>
            <h1>Perfect Pricing Plan</h1>
        </div>
        <div className="cards">
            <div className="card">
                <h3>Basic Plan</h3>
                <span><span className='price-number'>$49.90</span>/month</span>
                <hr />
                <ul>
                    <li><AiOutlineCheck color='green'/>HTML5 & CSS3</li>
                    <li><AiOutlineCheck color='green'/>Bootstrap v5</li>
                    <li><AiOutlineCheck color='green'/>FontAwesome Icons</li>
                    <li><AiOutlineCheck color='green'/>Responsive Layout</li>
                    <li><AiOutlineCheck color='green'/>Cross-browser Support</li>
                </ul>
            <button>Buy Now!</button>
            </div>
            <div className="card">
                <h3>Standart Plan</h3>
                <span><span className='price-number'>$99.90</span>/month</span>
                <hr/>
                    <ul>
                        <li><AiOutlineCheck color='green'/>HTML5 & CSS3</li>
                        <li><AiOutlineCheck color='green'/>Bootstrap v5</li>
                        <li><AiOutlineCheck color='green'/>FontAwesome Icons</li>
                        <li><AiOutlineCheck color='green'/>Responsive Layout</li>
                        <li><AiOutlineCheck color='green'/>Cross-browser Support</li>
                    </ul>
                <button>Buy Now!</button>
            </div>
            <div className="card">
                <h3>Advanced Plan</h3>
                <span><span className='price-number'>$149.90</span>/month</span>
                <hr />
                    <ul>
                        <li><AiOutlineCheck color='green'/>HTML5 & CSS3</li>
                        <li><AiOutlineCheck  color='green'/>Bootstrap v5</li>
                        <li><AiOutlineCheck color='green'/>FontAwesome Icons</li>
                        <li><AiOutlineCheck color='green'/>Responsive Layout</li>
                        <li><AiOutlineCheck color='green'/>Cross-browser Support</li>
                    </ul>
                <button>Buy Now!</button>
            </div>
        </div>
    </div>
  )
}

export default Price