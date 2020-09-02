import React, { useContext } from 'react';

import styled from 'styled-components';

import BandTypeContext from '../BandTypeContext';

const BandTypeSwitch = (props) => {
  const { isFiveBands, setIsFiveBands } = useContext(BandTypeContext);

  const handleSwitch = (state) => {
    state ? setIsFiveBands(false) : setIsFiveBands(true);
    console.log(state);
  };

  const Switch = ({className, children}) => ( 
    <button className={className} onClick={() => handleSwitch(isFiveBands)}>{children}</button>
  );

  const StyledSwitch = styled(Switch)`
   margin: 1rem;
   background: none;
   box-border: 0.1rem solid #fffff;
   text-decoration: none;
   color: #ffffff;
  `

  return (
    <div>
      <StyledSwitch>
        {isFiveBands ? '5'  : '4'}-Bands Resistor Mode
      </StyledSwitch>   
    </div>
  )
}

export default BandTypeSwitch;