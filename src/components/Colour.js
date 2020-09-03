import React from 'react';

import styled from 'styled-components';

const Colour = (props) => {

  const Button = ({ className, children }) => (
    <button className={className} onClick={props.onClick}>{children}</button>
  );

  const StyledButton = styled(Button)`
    height: 2rem;
    min-width: ${props.minWidth}rem;
    margin: 0.5rem;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.7rem 1.2rem -0.5rem rgba(0,0,0,0.5);
    color: ${props.textColour};
    background-color: ${props.colour};

    &:hover{
      transform: translate(-0.1rem, -0.1rem);
    }
  `

  return ( <StyledButton>{props.text}</StyledButton> )
}

export default Colour;