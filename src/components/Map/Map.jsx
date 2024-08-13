import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <>
      <div className="map">
        <div className="map1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.854780620024!2d144.95451967668527!3d-37.81687033421696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c478bc5af%3A0xeddf7d50cb026d1d!2sExchange%20Tower%2C%20530%20Little%20Collins%20St%2C%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2s!4v1723539047017!5m2!1sen!2s"
            width="900"
            height="500"
            style= {{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
