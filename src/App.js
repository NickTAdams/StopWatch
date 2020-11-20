import StopWatchContainer from './components/StopWatchContainer';
import WatchFace from './components/WatchFace';
import { StyledButtonRow, StyledButton } from './components/Button';

const App = () => {
  return (
    <StopWatchContainer>
      <WatchFace />
      <StyledButtonRow>
        <StyledButton>Reset</StyledButton>
        <StyledButton>Start</StyledButton>
      </StyledButtonRow>
    </StopWatchContainer>
  );
}

export default App;
