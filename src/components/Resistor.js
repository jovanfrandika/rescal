import React, { useContext } from 'react';
import BandContext from '../BandContext';
import BandTypeContext from '../BandTypeContext';
import { colourList } from '../constants/colourList';

import styled from 'styled-components';

import Band from './Band';
import Label from './Label';

import fourBandResistor from '../assets/images/fourBandResistor.png';
import fiveBandResistor from '../assets/images/fiveBandResistor.png';
import { tolerance } from '../constants/textList';

const Container = styled.div`
margin: 2rem 0 1rem 0;
`;

const BaseResistor = styled.div`
display: flex;
flex-direction: row;
justify-item: center;
align-items: center;
height: ${props => props.height};
width: ${props => props.width};
background-image: url(${props => props.image});
background-size: cover;
`;

const Resistor = (props) => {
  
  const { bands } = useContext(BandContext);
  const { isFiveBands } = useContext(BandTypeContext);
  const bandsProperty = Object.keys(bands);
  
  let baseResistorImage, height, width;
  
  height = props.height + 'rem';
  width = props.width + 'rem';
  
  let manifestedBands = bandsProperty.map((band, index) => {
    let display, bandHeight, bandWidth, colour, left;
    bandWidth =  (Number(props.width)/16) + 'rem';
    colour = bands[band];
    
    if (index === 0 || index === 4)
    bandHeight =  (Number(props.height))+ 'rem';
    else
    bandHeight =  (Number(props.height)/1.27)+ 'rem';
    
    if (isFiveBands) {
      if (index === 2) left = 1.6;
      else if (index === 3) left = 1.6;
      else if (index === 4) left = 5.4;
      baseResistorImage = fiveBandResistor;
    } else {
      if (index === 2)  display = 'none'; 
      else if (index === 3) left = 1.6;
      else if (index === 4) left = 8.4;
      baseResistorImage = fourBandResistor;
    }
    
    if (index === 0 || index === 1) left = 2.7;
    
    return ( 
      <div key={index}>
        <Band 
          display={display}
          colour={colourList[colour]}
          height={bandHeight}
          width={bandWidth}
          mLeft={left}
        />
      </div>
    )
    
  })
  

  let bandValues, baseOhmValue, multipliedOhmValue, len, result;
  bandValues = bandsProperty.map((band, index) => {
    let selector = bands[band];
    if (band === 'fourth') {
      if (selector === 10 || selector === 11 )
        return Math.pow(10, -(selector - 9));
      return Math.pow(10, selector);
    } else if (band === 'fifth') {
      return ' ' + tolerance[selector]; 
    } else {
      return String(selector);
    }
  }) 

  if (isFiveBands) {
    baseOhmValue = Number(bandValues[0] + bandValues[1] + bandValues[2]);
  } else {
    baseOhmValue = Number(bandValues[0] + bandValues[1]);
  }
  multipliedOhmValue = baseOhmValue * bandValues[3];
  len = String(multipliedOhmValue).length;
  
  if (bandValues[3] > 1){
    if (len > 6){
      multipliedOhmValue = multipliedOhmValue / 1000000 + 'm';
    } else if (len > 3){
      multipliedOhmValue = multipliedOhmValue / 1000 + 'k';
    } 
  }
  
  result = multipliedOhmValue + 'Ω' + bandValues[4];

  return (
    <Container>
      <BaseResistor
        height={height}
        width={width}
        image={baseResistorImage}
      >
        {manifestedBands}
      </BaseResistor>
      <Label
        padding='0.6rem 0'
        margin='2rem 0 0 0'
        bg="#18b193"
        radius="5"
        fontSize='1.6'
        text={ result }
      />
    </Container>
  )

}

export default Resistor;