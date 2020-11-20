import StopWatchContainer from './components/StopWatchContainer';
import WatchFace from './components/WatchFace';
import { ButtonRow, Button } from './components/Button';
import { useEffect, useState } from 'react';

let startTime = 0;
let activeTimer = null;

const App = () => {

  useEffect(() => {
    return () => {
      clearTimeout(activeTimer);
    };
  }, []);

  const [time, setTime] = useState(0);
  const [stopped, setStopped] = useState(true);
  const [stoppedTime, setStoppedTime] = useState(0);

  const advanceTimer = () => {
    activeTimer = setTimeout(() => {
      setTime(Date.now() - startTime + stoppedTime)
      advanceTimer();
    }, 10);
  };

  const startTimer = () => {
    startTime = Date.now();
    advanceTimer();
    setStopped(false);
  };

  const stopTimer = () => {
    setStoppedTime(time);
    clearTimeout(activeTimer);
    setStopped(true);
  };

  const resetTimer = () => {
    if (stopped) {
      setTime(0);
      setStoppedTime(0);
    } else {
      startTime = Date.now();
    }
  };

  return (
    <StopWatchContainer>
      <WatchFace time={time} />
      <ButtonRow>
        <Button onClick={resetTimer}>
          Reset
        </Button>
        {
          stopped ?
            <Button onClick={startTimer}>Start</Button>
          :
            <Button onClick={stopTimer}>Stop</Button>
        }
      </ButtonRow>
    </StopWatchContainer>
  );
};

export default App;
