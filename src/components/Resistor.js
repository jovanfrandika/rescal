import React, { useContext } from 'react';
import BandContext from '../BandContext';
import { colourList } from '../constants/colourList';

import baseResistor from '../assets/images/base-resistor1.png';

let windowWidth = window.innerWidth;

let containerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const Resistor = (props) => {

  const { bands } = useContext(BandContext);
  const bandsProperty = Object.keys(bands);
  
  let height = props.height + 'rem';
  let width = props.width + 'rem';

  let bandHeight =  (Number(props.height))+ 'rem';
  let bandWidth =  (Number(props.width)/16) + 'rem';

  // let bandHeight = (props.height/2) + 'rem';
  // let bandWidth = (props.widht/2) + 'rem';

  let baseResistorStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: height,
    width: width,
    backgroundImage: 'url(' + baseResistor + ')', 
    backgroundSize: 'cover'
  }; 

  let manifestedBands = bandsProperty.map((band, index) => {
    let colour = bands[band];
    console.log(windowWidth);
    let left = (windowWidth/100 * index) + 'rem'; 
    return (
      <div style={{
        // position: 'fixed',
        backgroundColor: colourList[colour],
        height: bandHeight,
        width: bandWidth,
        margin: '0 1.6rem',
        // left: left, 
        zIndex: 1,
        }} 
        key={index}
      >
      </div>
    )
  })
  
  return (
    <div style={containerStyle}>
      <div style={baseResistorStyle}>
        {manifestedBands}
      </div>
    </div>
  )

}

export default Resistor;