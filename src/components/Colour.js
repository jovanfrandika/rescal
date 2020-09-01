import React from 'react';

const Colour = (props) => {

  let style = {
    height: '2rem',
    minWidth: '2rem',
    margin: '0.5rem',
    border: '0',
    borderRadius: '10px',
    boxShadow: "0 5px 10px -5px rgba(0,0,0,0.5)",
    backgroundColor: props.Kolour,
    padding: "5px",
  }

  return (
    <div>
      <button style={style} onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Colour;