import React from "react";
import "./Support.css";
import Svg2 from "../Svg2/Svg2";
import Button from "../Button/Button";
const Support = () => {
  const color1 = "#B01F63";
  const color2 = "#fff";
  return (
    <>
      <div className="supp">
        <div className="supnl">
          {/* <img src="/Images/support.png" alt="" /> */}
          <div className="support">
            <Svg2 main={color2} />
          </div>
          <div className="supp1">
            <div className="supp1-1">
              <span>SPS can support your power system </span>
              <span>engineering needs. </span>
            </div>
            <div className="supp1-2">
              <Button
                btnText="Talk Us Today"
                height="60px"
                width="230px"
                onClick={() => alert("Button clicked!")}
              />
            </div>
            {/* <div className="supp1-3">er</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
