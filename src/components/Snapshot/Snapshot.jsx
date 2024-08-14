import React from "react";
import "./Snapshot.css";
import Svg1 from "../svg1/Svg1";
const Snapshot = () => {
     const color="#EBE7E4";
  return (
    <>
      <div className="snap">
        <div className="snap1">
          <div className="snap1-1">
            <span>SPS Snapshot</span>
          </div>
          <div className="snap1-2">
            <div className="snap1-2-1">
              <div className="snap1-2-1-1">
                <img src="/Images/About/10002.png" alt="" />
              </div>
              <div className="snap1-2-1-2">
                <span id="snap-l">
                  <span id="snap-h">
                    Team of 18 power system engineers
                  </span>{" "}
                  with experience including extensive design of utility scale
                  and renewable generating systems.
                </span>
              </div>
            </div>
            <div className="snap1-2-2">
              <div className="snap1-2-2-1">
                <img src="/Images/About/10003.png" alt="" />
              </div>
              <div className="snap1-2-2-2">
                <span id="snap-l">
                  {" "}
                  <span id="snap-h">
                    Established in 2021 with over 100 years
                  </span>{" "}
                  of collective power system engineering experience.
                </span>
              </div>
            </div>
            <div className="snap1-2-3">
              <div className="snap1-2-3-1">
                <img src="/Images/About/10004.png" alt="" />
              </div>
              <div className="snap1-2-3-2">
                <span id="snap-l">
                  Head office in <span id="snap-h">Melbourne</span>, with a
                  presence in <span id="snap-h">Brisbane</span> and{" "}
                  <span id="snap-h">Sydney</span>.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="snap2">
          </div> */}
      </div>
    </>
  );
};

export default Snapshot;
