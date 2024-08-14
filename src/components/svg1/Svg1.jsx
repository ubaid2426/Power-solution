import React from 'react'
import "./Svg1.css"
const Svg1 = (props) => {
  const dynamicClass = props.change ? 'some' : '';
  // if ('some'== true){
  //   <style>

  //     background='transparent';
  //     background-color: rgba(255, 255, 255, 0.5);
  //   </style>
  // }
  return (
    <>
       <div className='head' id={dynamicClass} data-negative="false">
        <svg  id='head-1' preserveAspectRatio='none' opacity=".99" data-bbox='0 102.446 1920 197.554' fill={props.main} viewBox='0 102.446 1920 197.554' height='100%' width='100%' xmlns='http://www.w3.org/2000/svg' data-type='shape'>
            <g>
                <path id="head-2" d='M0 102.446V300h1920S1050.116 102.446 0 102.446z'/>
          </g>
    </svg>
    </div>
    </>
  )
}

export default Svg1
