import React from 'react'

function ResultModal({result, targetTime}) {
  return (
    
    <dialog className='result-modal' open>
        <h2>You {result}</h2>
        <p>the target was <strong>{targetTime}.seconds</strong></p>
        <p>You stopped the timer with <strong>X second left</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal