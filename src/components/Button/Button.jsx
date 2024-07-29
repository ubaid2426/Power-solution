import React from 'react';
import './Button.css';

const Button = ({ btnText, height = '70px', width = '250px', ...props }) => {
  // Inline style for height and width
  const buttonStyle = {
    height,
    width,
  };

  return (
    <button
      id="btn"
      style={buttonStyle} // Apply inline styles here
      {...props} // Pass through any additional props
    >
      {btnText}
    </button>
  );
};

export default Button;
