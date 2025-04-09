import Player from './components/Player.jsx';
import TimeChallenge from './TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge/>
        <TimeChallenge/>
        <TimeChallenge/>
      </div>
    </>
  );
}

export default App;
