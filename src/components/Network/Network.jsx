import React from 'react'
import "./Network.css"
import AOS from "aos"
import 'aos/dist/aos.css';
 import { useEffect } from 'react'
const Network = () => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  },[]);
  return (
    <>
      <div className="net">
      <div className="connect-3">
          <div className="con3-1" data-aos="fade-left">
            <img src="/Images/Services/10004.png" alt="" />
          </div>
          <div className="con3-2">
            <div className="con3-2-1">
              <span>Network Services</span>
            </div>
            <div className="con3-2-2">
              <span>
                Grid advisory services to network service providers and
                operators.
              </span>
            </div>
            <div className="con3-2-3">
              <ul>
                <li>Connection due diligence</li>
                <li>
                Network modeling and analysis to support operations, planning and development including:
                </li>

                <ul>
                  <li>Thermal and voltage studies</li>
                  <li>System Stability and dynamics</li>
                  <li>Power quality and harmonic</li>
                  <li>EMT simulation</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="connect-4">
          <div className="con4-1" data-aos="fade-left">
            <img src="/Images/Services/10005.png" alt="" />
          </div>
          <div className="con4-2">
            <div className="con4-2-1">
              <span>Strategic Advice</span>
            </div>
            <div className="con4-2-2">
              Strategic technical advice and analysis to support:
            </div>
            <div className="con4-2-3">
              <ul>
                <li>Government policy implementation or changes</li>
                <li>Regulators looking at changing rules</li>
                <li>
                  Market designers looking to adapt and create new markets
                </li>
                <li>Research</li>
                <li>
                  New market participants looking to expand into the National
                  Electricity Market
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Network
