import React from 'react';

type Color = {
  style: { [key: string]: string }; 
};

export default function Bai7(props: Color) {
  return (
    <div>
        <br />
      {Object.keys(props.style).map((key, index) => (
        <button key={index} className={props.style[key]}>
          {key}
        </button>
      ))}
    </div>
  );
}
