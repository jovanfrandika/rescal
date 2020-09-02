import React from 'react';

import styled from 'styled-components';

const Band = (props) => {

  const Output = styled.div`
  display: ${props.display};
  background-color: ${props.colour};
  height: ${props.height};
  width: ${props.width};
  margin: '0 1.6rem';
  margin-left: ${props.mLeft}rem;
  z-index: 1;

  &:hover{
    transform: translate(-0.1rem, -0.1rem);
  }
  `;

  return (<Output></Output>)
}

export default Band;