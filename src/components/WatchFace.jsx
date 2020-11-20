import styled from 'styled-components';

const StyledWatchFace = styled.h1`
  width: 80%;
  margin: 0;
  border: 2px solid black;
  border-radius: 25px;
  padding: 0 10%;
  background-color: lime;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2 2 auto;
  font-size: 40px;
`;

const WatchFace = () => {
  return (
    <StyledWatchFace>
        12:00:00
    </StyledWatchFace>
  )
};

export default WatchFace;
