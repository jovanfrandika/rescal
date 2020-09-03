import React, { useContext } from 'react';

import styled from 'styled-components';

import BandTypeContext from '../BandTypeContext';

const StyledSwitch = styled.button.attrs(props => ({
  onClick: props.onClick,
  children: props.children
}))`
cursor: pointer;
margin: 3rem 0 2rem 0 ;
background: ${props => props.isFiveBands ? '#005d73' : '#ffc3a4'}};
border: 0;
border-radius: 1rem;
box-border: 0.1rem solid #fffff;
box-shadow: 0 0.1rem 1rem rgba(0,0,0,0.5);
text-decoration: none;
color: ${props => props.isFiveBands ? '#ffffff' : '#ccccccc'};
`;

const BandTypeSwitch = () => {
  const { isFiveBands, setIsFiveBands } = useContext(BandTypeContext);

  const handleSwitch = (state) => {
    localStorage.setItem('resistorTypeCookies', !state);
    state ? setIsFiveBands(false) : setIsFiveBands(true);
    console.log(state);
  };


  return (
    <div>
      <StyledSwitch
        onClick={() => handleSwitch(isFiveBands)}
        isFiveBands={isFiveBands}
      >
        {isFiveBands ? '5'  : '4'}-Bands Resistor Mode
      </StyledSwitch>   
    </div>
  )
}

export default BandTypeSwitch;