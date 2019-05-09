import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightCol);
  border-color: ${props =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightCol)'};
  color: ${props => (props.cart ? 'var(--mainYellow)' : 'var(--lightCol)')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  /* margin: 0.2rem 0.5rem 0.2rem 0.5rem; */
  transition: all 0.15s ease-in-out;
  &:hover {
    background: ${prop =>
      prop.cart ? 'var(--mainYellow)' : 'var(--lightCol)'};
    color: var(--mainCol);
  }
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
