import React from 'react'
import "./About.css"
import Svg1 from "../../components/svg1/Svg1"
import Navbar from '../../components/Navbar/Navbar'
import Snapshot from '../../components/Snapshot/Snapshot'
const About = () => {
  const color1 ="#fff";
  return (
    <>
        <div className="about">
      <div className="abo1">
        <Navbar/>
        <div className="abo1-1">
          <div className="abo1-1-1"><span>About</span></div>
          <div className="abo1-1-1">  <Svg1 main={color1}/></div>
        </div>
      </div>
      <div className="abo2"><Snapshot/></div>
      <div className="abo3"></div>
      <div className="abo4"></div>
      <div className="abo5"></div>
      <div className="abo6"></div>
     </div>
    </>
  )
}

export default About
