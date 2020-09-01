import React, {  useContext } from 'react';

import BandContext from '../BandContext';
import { colourList } from '../constants/colourList';
import { multiplier, tolerance } from '../constants/textList';

import Colour from './Colour';

let colourContainer = {
  backgroundColour: "#ffffff",
}

const BandSelection = (props) => {
  const {bands, setBands} = useContext(BandContext);

  const handleClick = (index) => {
    setBands({...bands, [props.whichBand]: index});
    // localStorage.removeItem('resistorCookies');
    let stringBands = JSON.stringify(bands);
    localStorage.setItem('resistorCookies', stringBands);

  }

  let colourSelections = colourList.map((colour, index) => {
    let text;
    if (props.whichBand === 'fourth')
      text = multiplier[index];
    else if (props.whichBand === 'fifth') 
      text = tolerance[index];
    else 
      text = index;

    if (props.whichBand !== 'fourth' && props.whichBand !== 'fifth' && index > 9) 
      return null;

    return (
      <Colour key={index} Kolour={colour} onClick={() => handleClick(index)} text={text}/>
      // <button style={{backgroundColor: colour}}></button>
    );

  })

  return (
    <div className={colourContainer}> 
      {colourSelections}
    </div>
  )
}

export default BandSelection;