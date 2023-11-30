import React, {useState} from 'react'
import "./home.scss"
import About from "../about/About"
import Facts from '../facts/Facts'
import Services from '../services-comp/Services'
import Features from '../features/Features'
import Price from '../price/Price'
import Quote from '../quote/Quote'
import Team from '../team/Team'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const [code, setCode] = useState(null)
  const [data, setData] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.get(`http://localhost:5002/orders/api/get-single-order/${code}`)
      if(response){
        setData(response.data)
        navigate.push("/orders", {data})
      }else{
        console.log("unsuccess")
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <div className="container-home">
            <div className="left">
                <h3>TRANSPORT & LOGISTICS SOLUTION</h3><br />
                <h1>#1 Place For Your <span style={{color:"brown"}}>Logistics</span><br />Solution</h1><br />
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ad voluptate nemo cupiditate <br /> suscipit accusamus fugiat ab 
                    molestias obcaecati
                </h3>
            </div>
            <div className="right">
              <h1>Search here to find your shipping</h1>
              <form onSubmit={handleSubmit}>
                <input type="test" placeholder='Order Code' onChange={(e)=> setCode(e.target.value)}/>
                <button type='submit'>Search</button>
              </form>
            </div>
        </div>
        <div className="about">
          <About/>
        </div>
        <div className="facts">
          <Facts/>
        </div><br /><br />
        <div className="services">
          <Services/>
        </div>
        <div className="features">
          <Features/>
        </div>
        <div className="price">
          <Price/>
        </div>
        <div className="quote">
          <Quote/>
        </div><br />
        <div className="team">
          <Team/>
        </div>
    </div>
  )
}

export default Home
