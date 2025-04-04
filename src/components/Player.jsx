import { useRef, useState } from "react"

export default function Player() {
  const playerName= useRef();
  const[enteredplayerName,setEnteredplayerName]=useState(null);
  // const [submitted,setSubmitted]=useState(false);
  // function handleChange(event)
  // {
  //   setSubmitted(false);
  //   setEnteredplayerName(event.target.value)
  // }
function handlesubmitted(){
  
  setEnteredplayerName(playerName.current.value);
}
  return (
   
    <section id="player">
      <h2>Welcome {enteredplayerName ?? 'Player'}</h2>
      <p>
        <input ref={playerName} type="text"  />
        <button onClick={handlesubmitted}>Set Name</button>
      </p>
    </section>
  );
}
