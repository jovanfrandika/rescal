import React, { useContext } from 'react';

import styled from 'styled-components';

import BandTypeContext from '../BandTypeContext';

const BandTypeSwitch = (props) => {
  const { isFiveBands, setIsFiveBands } = useContext(BandTypeContext);

  const handleSwitch = (state) => {
    localStorage.setItem('resistorTypeCookies', !state);
    state ? setIsFiveBands(false) : setIsFiveBands(true);
    console.log(state);
  };

  const Switch = ({className, children}) => ( 
    <button className={className} onClick={() => handleSwitch(isFiveBands)}>{children}</button>
  );

  const StyledSwitch = styled(Switch)`
  margin: 3rem 0 2rem 0 ;
  background: ${isFiveBands ? '#005d73' : '#ffc3a4'}};
  border: 0;
  border-radius: 1rem;
  box-border: 0.1rem solid #fffff;
  box-shadow: 0 0.1rem 1rem rgba(0,0,0,0.5);
  text-decoration: none;
  color: ${isFiveBands ? '#ffffff' : '#ccccccc'};
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