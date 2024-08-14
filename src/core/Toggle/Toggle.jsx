import React, { useState } from 'react';
import "./Toggle.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const ToggleParagraph = ({ title, as_title, eng_title, description, assessments = [], engagements = [] }) => {
  // State to keep track of the visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="toggle">
        <div className="tog">
          <span id='tit' onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
            <span id='icon12'>
              {isVisible ? <IoChevronDownCircleOutline /> : <IoIosArrowDropright />}
            </span>
            <span id='tit1'>{title}</span>
          </span>
          {isVisible && (
            <div className="head">
              <div className="head1">
                {description && (
                  <div className="head1-1">
                    <span id='des'>{description}</span>
                  </div>
                )}

                {assessments.length > 0 && (
                  <div className="head1-2">
                    <div className="head1-2-1">
                      <span id='as_title'>{as_title}</span>
                    </div>
                    <div className="head1-2-2">
                      <ul>
                        {assessments.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {engagements.length > 0 && (
                  <div className="head1-3">
                    <div className="head1-3-1">
                      <span>{eng_title}</span>
                    </div>
                    <div className="head1-3-2">
                      <ul>
                        {engagements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ToggleParagraph;
