import styled from 'styled-components';

const StyledWatchFace = styled.h1`
  width: 100%;
  margin: 0;
  background-color: lime;
  border: 2px solid black;
  border-radius: 25px;
  text-align: center;
  font-family: 'VT323', sans-serif;
  font-size: 50px;
`;

const addZero = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return time.toString();
};

const WatchFace = ({ time }) => {

  const minutes = Math.floor(time / (60 * 1000));
  const minutesInMs = minutes * 60 * 1000;
  const seconds = Math.floor((time - minutesInMs) / 1000);
  const secondsInMs = seconds * 1000;
  const hundredths = Math.floor((time - minutesInMs - secondsInMs) / 10);
  let displayTime = minutes < 100 
    ? `${addZero(minutes)}:${addZero(seconds)}:${addZero(hundredths)}`
    : 'MAX';

  return (
    <StyledWatchFace>
      {displayTime}
    </StyledWatchFace>
  );
}

export default WatchFace;
