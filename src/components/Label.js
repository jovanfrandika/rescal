import styled from 'styled-components';

const Label = styled.p.attrs(props => ({
  children: props.text,
}))`
  color: #ffffff;
  height: ${props => props.height}rem;
  width: ${props => props.width}rem;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background: ${props => props.bg};
  border-radius: ${props => props.radius}rem;
  font-size: ${props => props.fontSize}rem;
`;

export default Label;