import React from "react";
import "./Director.css";
import Svg1 from "../svg1/Svg1";
const Director = () => {
    const color="#fff";
    const color1="#EBE7E4";
    const right = true;
  return (
    <>
      <div className="dir">
        <div className="dir-2">
     <Svg1 main={color1} change={right}/>
        </div>
        <div className="dir1">
          <div className="dir1-1">
            <span>Meet Our Directors</span>
          </div>
          <div className="dir1-2">
            <div className="dir1-2-1">
              <div className="dir1-2-1-1">
                <img src="/Images/About/10005.jpg" alt="" />
              </div>
              <div className="dir1-2-1-2"><span id="dir-h">Barry O’Connell
              </span></div>
              <div className="dir1-2-1-3"><span id="dir-italic">Managing Director</span></div>
              <div className="dir1-2-1-4"><span id="dir-l">Barry has 13 years of power system engineering experience working across TNSPs, AEMO, and in consulting for EPC contractors and developers.</span></div>
              <div className="dir1-2-1-5"><span id="dir-l">Barry has extensive experience in dealing with design of renewable plant including grid connection, control and design requirements, weak network connections, STATCOM and Syncon integrated projects.</span></div>
              <div className="dir1-2-1-6"><span id="dir-l">Barry has led the negotiation of grid connection processes for over 40 projects ranging from Connection Application (CA), Registration (R1), Commissioning and Testing (R2), Model Validation, Ongoing Compliance and Change Management (5.3.9).</span></div>
            </div>
            <div className="dir1-2-2">
              <div className="dir1-2-2-1">
                <img src="/Images/About/10006.jpg" alt="" />
              </div>
              <div className="dir1-2-2-2"><span id="dir-h">Tim Gorman</span></div>
              <div className="dir1-2-2-3">
                <span id="dir-italic">Technical Director Grid Connection</span>
              </div>
              <div className="dir1-2-2-4"><span id="dir-l">Tim has 8 years of power system engineering experience working across TNSPs, AEMO, and in consulting supporting EPC contractors and developers.</span></div>
              <div className="dir1-2-2-5"><span id="dir-l">Tim worked as an expert connection engineer designing over 60 renewable projects with a successful track record of connecting energy projects to the NEM power grid.</span></div>
              <div className="dir1-2-2-6"><span id="dir-l">Tim has extensive experience in dealing with grid connection, control and design requirements for complex projects including hybrid, weak network connection projects.</span></div>
            </div>
            <div className="dir1-2-3">
              <div className="dir1-2-3-1">
                <img src="/Images/About/10007.jpg" alt="" />
              </div>
              <div className="dir1-2-3-2"><span id="dir-h"></span></div>
              <div className="dir1-2-3-3"><span id="dir-italic">Technical Director Commissioning and Testing</span></div>
              <div className="dir1-2-3-4"><span id="dir-l">15 years of power system engineering experience working across TransPower in New Zealand, AEMO, and in consulting supporting EPC contractors and developers.</span></div>
              <div className="dir1-2-3-5"><span id="dir-l">Andrew has extensive experience in design and testing of both synchronous and renewable plant. He has physically managed testing on site of most synchronous plant in Australia in his early career and later as an industry leader in testing of asynchronous plant.

</span></div>
            </div>
            <div className="dir1-2-4">
              <div className="dir1-2-4-1">
                <img src="/Images/About/10008.jpg" alt="" />
              </div>
              <div className="dir1-2-4-2"><span id="dir-h">Patrick Rossiter</span></div>
              <div className="dir1-2-4-3"><span id="dir-italic">Specialist Engineer

</span></div>
              <div className="dir1-2-4-4"><span id="dir-l">Has 15 years’ experience as a power system engineer and has managed the successful connection of many large-scale renewable plants including the Finley solar farm with end-to-end connection of the first dedicated sync con installed at Buronga.</span></div>
              <div className="dir1-2-4-5"><span id="dir-l">Patrick is responsible for specialist studies work, including model troubleshooting, PSSe model writing, wide area PSCAD studies for NSPs, power system training and support.</span></div>
            </div>
          </div>
        </div>
        <div className="dir-1">
            <Svg1 main={color}/>
        </div>
      </div>
    
    </>
  );
};

export default Director;
