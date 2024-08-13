import React from "react";
import "./Acre.css";
import Svg3 from "../Svg3/Svg3";
const Acre = () => {
  const color = "#fff";
  return (
    <>
      <div className="Acre">
        <div className="Ac1">
          <Svg3 main1={color} />
        </div>
        <div className="Ac2">
          <div className="Ac2-1">
            <span>We are accredited.</span>
          </div>
          <div className="Ac2-2">
            <div className="Ac2-2-1">
              <span>SPS has all requisite credentials.</span>
            </div>
            <div className="Ac2-2-2">
              <ul>
                <li>Member of CIGRE</li>
                <li>Chartered Professional Engineer</li>
                <li>Registered Professional Engineer Queensland</li>
                <li>Professional Engineer Victoria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acre;
