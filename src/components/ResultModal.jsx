import {forwardRef, React }from 'react'

const ResultModal = forwardRef(function ResultModal({result, targetTime},ref) {
  return (
    
    <dialog ref={ref} className='result-modal'>
        <form method='dialog'>
            <button>X</button>
        </form>
        <h2>You {result}</h2>
        <p>the target was <strong>{targetTime}.seconds</strong></p>
        <p>You stopped the timer with <strong>X second left</strong></p>
      
    </dialog>
  )
});

export default ResultModal