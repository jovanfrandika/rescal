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
    bandHeight =  (Number(props.height)/1.3)+ 'rem';
    
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
    
    let children =  <Band 
    display={display}
    colour={colourList[colour]}
    height={bandHeight}
    width={bandWidth}
    mLeft={left}
    />
    
    return ( children )
    
  })
  
  const Container = styled.div`
  margin: 2rem 0;
  `;
  
  const BaseResistor = styled.div`
  display: flex;
  flex-direction: row;
  justify-item: center;
  align-items: center;
  height: ${height};
  width: ${width};
  background-image: url(${baseResistorImage});
  background-size: cover;
  `;

  let a, b, c, d;
  a = bandsProperty.map((band, index) => {
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
    b = Number(a[0] + a[1] + a[2]);
  } else {
    b = Number(a[0] + a[1]);
  }
  c = b * a[3];
  d = String(c);
  
  if (a[3] > 1){
    if (d.length > 6){
      c = c / 1000000 + 'm';
    } else if (d.length > 3){
      c = c / 1000 + 'k';
    } 
  }
  
  let result = c + 'Ω' + a[4];

  return (
    <Container>
      <BaseResistor>
        {manifestedBands}
      </BaseResistor>
      <Label
        padding='1.6rem 1rem'
        margin='3rem 0'
        fontSize='1.6'
        text={ result }
      />
    </Container>
  )

}

export default Resistor;