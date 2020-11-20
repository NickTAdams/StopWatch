import styled from 'styled-components';

const StyledButton = styled.button`
  width: 40%;
  border: 2px solid black;
  border-radius: 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
`;

const StyledButtonRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
`;

export { StyledButton, StyledButtonRow };
