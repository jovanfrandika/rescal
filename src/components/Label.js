import React from 'react';

import styled from 'styled-components';

const Label = (props) => {

  const Text = ({className, children}) => ( 
    <p className={className}>{children}</p>
  );

  const StyledText = styled(Text)`
    color: #ffffff;
    height: ${props.height}rem;
    width: ${props.width}rem;
    padding: ${props.padding};
    margin: ${props.margin};
    border: 0.1rem solid #ffffff;
    border-radius: ${props.radius}rem;
    font-size: ${props.fontSize}rem;
  `;

  return (<StyledText>{props.text}</StyledText>);
}

export default Label;