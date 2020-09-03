import styled from 'styled-components';

const Band = styled.div`
display: ${props => props.display};
background-color: ${props => props.colour};
height: ${props => props.height};
width: ${props => props.width};
margin: '0 1.6rem';
margin-left: ${props => props.mLeft}rem;
z-index: 1;

&:hover{
  transform: translate(-0.1rem, -0.1rem);
}
`;

export default Band;