import Player from './components/Player.jsx';
import TimeChallenge from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Tester" targetTime={5}/>  
        <TimeChallenge title="Easy" targetTime={10}/>
        <TimeChallenge title="Fast" targetTime={20}/>
        <TimeChallenge title="Modern" targetTime={30}/>
       
      </div>
    </>
  );
}

export default App;
