import React from 'react'
import "./team.scss"
import TeamOne from "../../assets/logisticimages/team-1.jpg"
import TeamTwo from "../../assets/logisticimages/team-2.jpg"
import TeamThree from "../../assets/logisticimages/team-3.jpg"
import TeamFour from "../../assets/logisticimages/team-4.jpg"

const Team = () => {
  return (
    <div className='container-team'>
        <div className="team">
            <h4>OUR TEAM</h4>
            <h1>Expert Team Members</h1>
        </div>
        <div className="cards">
            <div className="card">
                <img src={TeamOne} alt="" />
                <h2>Full Name</h2>
                <h5>Designation</h5>
                <button>Read More</button>
            </div>
            <div className="card">
                <img src={TeamTwo} alt="" />
                <h2>Full Name</h2>
                <h5>Designation</h5>
                <button>Read More</button>
            </div>
            <div className="card">
                <img src={TeamThree} alt="" />
                <h2>Full Name</h2>
                <h5>Designation</h5>
                <button>Read More</button>
            </div>
            <div className="card">
                <img src={TeamFour} alt="" />
                <h2>Full Name</h2>
                <h5>Designation</h5>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Team