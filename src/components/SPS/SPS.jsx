import React from "react";
import "./SPS.css";
import SVG from "../SVG/SVG"
import Svg1 from "../svg1/Svg1"
const SPS = () => {
    const color5 = "#EBE7E4";
    const color1 = "#B01F63";
    const color3 ="#fff";
  return (
    <>
      <div className="sp">
          <div className="sp1-4">
          <SVG svg={color5}/>
            </div>
        <div className="sp1">
          
          <div className="sp1-1">
            <span>Why SPS?</span>
          </div>
          <div className="sp1-2">
            <span>
              With over 100 years of collective power system engineering
              experience, we have built a team with a proven record of the
              highest quality work and successful project delivery.
            </span>
          </div>
          <div className="sp1-3">
            <div className="sp1-3-1">
              <div className="sp1-3-1-1">
                <span id="sp-h">Network Understanding</span>
              </div>
              <div className="sp1-3-1-2">
                <span id="sp-l1">
                  Extensive understanding of the
                  <span id="sp-h3">
                    NEM network and NSP process and requirements,
                  </span  >
                  with experience across major projects connected in the NEM,
                  from pre-feasibility to running Full Impact Assessment (FIA)
                  studies and commissioning and testing.
                </span>
              </div>
            </div>
            <div className="sp1-3-2">
              <div className="sp1-3-2-1">
                <span id="sp-h">Technology</span>
              </div>
              <div className="sp1-3-2-2">
                <div className="sp1-3-2-2-1">
                  <span  id="sp-l1" >
                    Experienced <span id="sp-h3">with all major OEMs</span> on troubleshooting,
                    compliance, model writing, and controller design on:
                  </span>
                </div>
                <div className="sp1-3-2-2-2">
                    <ul>
                  <li>
                    <span id="sp-h1">Wind</span>
                    <span id="sp-l1">(DFIG and Full converter),</span>
                  </li>
                  <li>
                    <span id="sp-h1">Solar</span>
                    <span id="sp-l1">(central, string and DC coupled)</span>
                  </li>
                  <li>
                    <span id="sp-h1">Battery</span>
                    <span id="sp-l1">(grid following and forming)</span>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sp1-3-3">
              <div className="sp1-3-3-1">
                <span id="sp-h">Process and Quality</span>
              </div>
              <div className="sp1-3-3-2">
                <div className="sp1-3-3-2-1">
                  <span id="sp-l1">
                    We have dedicated <span id="sp-h3">senior engineering</span> resources to support
                    all projects, as well as <span id="sp-h3">comprehensive quality assurance
                    processes</span> for all deliverables to minimise delays and
                    rework.
                  </span>
                </div>
                <div className="sp1-3-3-2-2">
                  <span id="sp-l1">
                    Employing a <span id="sp-h3">process-driven and highly efficient approach</span> to
                    deliverables by automating studies and leveraging in-house,
                    high-powered servers.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sp1-5">
          <Svg1 main={color3}/>
            </div>
      </div>
    </>
  );
};

export default SPS;
