import React from "react";
import Tog from "../Tog/Tog";
import "./Connection.css";
import SVG from "../SVG/SVG";
import Network from "../Network/Network";
// import ToggleParagraph from '../Toggle/Toggle'
const Connection = () => {
  const color5 = "#EBE7E4";
  return (
    <>
      <div className="connection">
        <div className="connect-0">
          <SVG svg={color5} />
        </div>
        <div className="connect-1">
          <div className="con1">
            <img src="/Images/Services/10003.png" alt="" />
          </div>
          <div className="con2">
            <div className="con2-1">
              <div className="con2-1-1">
                <span>Grid Connection Services</span>
              </div>
              <div className="con2-1-2">
                <span>
                  SPS provide specialist power system engineering services at
                  each stage of the grid connections process.{" "}
                </span>
              </div>
              <div className="con2-1-3">
                <span>
                  We provide the necessary technical knowledge, experience, and
                  insights to overcome challenges, optimise system performance,
                  and ensure that the renewable generator's integration into the
                  grid is successful and compliant with all relevant standards
                  and regulations.
                </span>
              </div>
              <div className="con2-1-4">
                <span>
                  Power system engineers have a critical function in the process
                  of connecting renewable generators to the grid. We provide
                  strategic insights into project feasibility, regulatory
                  adherence, and optimal connection strategies as well as
                  contributing technical expertise to design grid
                  infrastructure, ensuring alignment with the existing network,
                  and conducting thorough impact assessments to ensure grid
                  stability and dependability.
                </span>
              </div>
            </div>
            <div className="con2-2">
              <img src="/Images/Services/10001.png" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="connect-2">
          {" "}
          <Tog />
        </div> */}
       
      </div>
      {/* <Network/> */}
    </>
  );
};

export default Connection;
