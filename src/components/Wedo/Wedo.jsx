import React from 'react'
import './We_do.css'
// import SVG1 from "../svg1/Svg1"
// import SVG from "../SVG/SVG"
import Button from '../Button/Button';
const Wedo = () => {
  const color1 = "#B01F63";
  const color2 = "#97377A";
  const color4 = '#A42B6E';
  const color5 = "#EBE7E4";
  const color3= "linear-gradient(to right bottom, rgba(176, 31, 98, 1) 0%, rgb(151, 55, 122) 100%)";
  // const style = {
  //   background: color3,
  //   color: color1
  // };
  
  return (
    <>
    <div className="we">
      <div className="we1">
        <div className="we1-1">
          <div className="we1-1-1"><span>What We Do</span></div>
        </div>
        <div className="we1-2">
          <div className="we1-2-1"><span>We work with major electricity transmission network service providers, generation companies, energy asset owners and developers, market operators and distribution utilities.</span></div>
          <div className="we1-2-2"><span>We have specialist knowledge in grid connections, planning and development across industry.</span></div>
        </div>
        <div className="we1-3">
          <div className="we1-3-1">
            <div className="we1-3-1-1"><img src="/Images/100016.png" alt="how" /></div>
            <div className="we1-3-1-2"><span>Grid Connection Services</span></div>
            <div className="we1-3-1-3"><span id='first'> <span id='high-light'>Developers, OEMs and Financiers</span> on utility scale generators (wind, solar & battery)</span></div>
          </div>
          <div className="we1-3-2">
            <div className="we1-3-2-1"><img src="/Images/100017.png" alt="how" /></div>
            <div className="we1-3-2-2"><span>Network Services</span></div>
            <div className="we1-3-2-3"><span id='first'> <span id='high-light'>Network Service Providers and Operators</span> to support transition to lower carbon grids</span></div>
          </div>
          <div className="we1-3-3">
            <div className="we1-3-3-1"><img src="/Images/10003.png" alt="how" /></div>
            <div className="we1-3-3-2"><span>Strategic Advice</span></div>
            <div className="we1-3-3-3"><span id='first'> <span id='high-light'>Regulatory, Market and Government Bodies</span> providing strategic and technical advice to support policy change</span></div>
          </div>
        </div>
        <div className="we1-4">
        <Button
        btnText="Our Services"
        height="60px"
        width="200px"
        onClick={() => alert('Button clicked!')}
      />
        </div>
      </div>
      {/* style={style} */}
      
    </div>
    </>
  )
}

export default Wedo;
