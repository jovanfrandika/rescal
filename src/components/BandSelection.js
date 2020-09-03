import React, {  useContext } from 'react';

import BandContext from '../BandContext';
import BandTypeContext from '../BandTypeContext';

import { colourList } from '../constants/colourList';
import { multiplier, tolerance } from '../constants/textList';

import Colour from './Colour';

import Label from './Label';

const BandSelection = (props) => {
  const {bands, setBands} = useContext(BandContext);
  const {isFiveBands} = useContext(BandTypeContext);

  const handleClick = (index) => {
    
    let newBands = {...bands, [props.whichBand]: index}
    setBands(newBands);

    let stringBands = JSON.stringify(newBands);
    localStorage.setItem('resistorCookies', stringBands);

  }

  let flexStyle = {
    display: !isFiveBands && props.whichBand === 'third' ? 'none' :'flex',
    flexDirection: 'column',
    aligntItems: 'center',
    margin: '0 0.2rem'
  };

  let label;

  let colourSelections = colourList.map((colour, index) => {
    let text, textColour, minWidth, empty;
    
    empty = false;
    textColour = '#38565c';

    if (props.whichBand === 'fourth'){
      label = 'M';
      text = multiplier[index];
      minWidth = 5;
      if (text === '') empty = true;
    }
    else if (props.whichBand === 'fifth'){
      label = 'T';
      text = tolerance[index];
      minWidth = 6;
      if (text === '') empty = true;
    } 
    else {
      label = props.whichBand;
      text = index;
      minWidth = 3;
    } 

    if (props.whichBand !== 'fourth' && props.whichBand !== 'fifth' && index > 9) 
      empty = true;

    if (empty) return (<div key={index}></div>);
      
    return (
      <div key={index}>
        <Colour 
          colour={colour} 
          minWidth={minWidth}
          onClick={() => handleClick(index)} 
          text={text}
          textColour={textColour}
        />
      </div>
    );
    
  })
  
  return ( 
    <div style={flexStyle}>
      <Label text={label}/> 
      {colourSelections} 
    </div>
  )

}

export default BandSelection;