import React from 'react';
import './Popup.css';


function Popup({ onClose, onClickBtn }) {
  return (
    <>
      <div style={{backgroundColor: 'rgba(0, 0, 0, .7)', top: '0', left: '0', right: '0', bottom: '0', position: 'fixed'}} onClick={() => console.log('clicked')}>
         <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '50px', backgroundColor: 'rgba(0, 0, 0, .7)'}}>
             <button onClick={onClickBtn} className='button set-alarm'> Snooze </button>
             <button onClick={onClose} className='button clear-alarm'> Disable </button>
         </div>
      </div>
    </>
  )
}

export default Popup;