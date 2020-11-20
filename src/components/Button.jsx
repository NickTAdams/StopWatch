import styled from 'styled-components';

const Button = styled.button`
  width: 40%;
  border: 2px solid black;
  border-radius: 25px;
  font-family: 'Orbitron', sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { Button, ButtonRow };
