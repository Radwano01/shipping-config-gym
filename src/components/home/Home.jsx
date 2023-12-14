import React, { useState } from "react";
import "./home.scss";
import About from "../about/About";
import Facts from "../facts/Facts";
import Services from "../services-comp/Services";
import Features from "../features/Features";
import Price from "../price/Price";
import Quote from "../quote/Quote";
import Team from "../team/Team";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import spinner from "../../assets/spinner.jpg";

const Home = () => {
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/orders/get-order-by-code`,
        { code }
      );
      setLoading(false);
      if (response.data.length > 0) {
        navigate("/orders", { state: { data: response.data } });
      } else {
        toast.error("Ops something went wrong try later please!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {loading && (
        <div className="overlay">
          <img src={spinner} alt="spinner" className="spinner" />
        </div>
      )}

      <div className="container-home">
        <div className="left">
          <h3>TRANSPORT & LOGISTICS SOLUTION</h3>
          <br />
          <h1>
            #1 Place For Your <span style={{ color: "brown" }}>Logistics</span>
            <br />
            Solution
          </h1>
          <br />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptate nemo cupiditate <br /> suscipit accusamus fugiat ab
            molestias obcaecati
          </h3>
        </div>
        <div className="right">
          <h1>Search here to find your shipping</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Order Code"
              onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="about">
        <About />
      </div>
      <div className="facts">
        <Facts />
      </div>
      <br />
      <br />
      <div className="services">
        <Services />
      </div>
      <div className="features">
        <Features />
      </div>
      <div className="price">
        <Price />
      </div>
      <div className="quote">
        <Quote />
      </div>
      <br />
      <div className="team">
        <Team />
      </div>
    </div>
  );
};

export default Home;
