import React, { useEffect, useState } from "react";
import Popup from "./Portal/Popup";
import './App.css'

let clock;
let interval;
let alarmMessage;
let messages = [];

function App() {
    const [currentTime, setCurrentTime] = useState('');
    const [alarmTime, setAlarmTime] = useState(() => {
      const local = localStorage.getItem('time')
      return local ? JSON.parse(local) : 0;
    });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        clock = setInterval(() => SetCurrentTime1(), 100);
        interval = setInterval(() => checkAlarmClock(), 100);
    });

    useEffect(() => {
      localStorage.setItem('time', JSON.stringify(alarmTime))
    }, [alarmTime])
    
    useEffect(() => {
        return () => {
            clearInterval(clock);
            clearInterval(interval);
        }
    })
  
    function SetCurrentTime1() {
        setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }

    function SetAlarmTime1(e) {
        messages.push(alarmTime);
        e.preventDefault();
        const inputAlarmTimeModified = e.target.value + ':00';
        setAlarmTime(inputAlarmTimeModified);
        localStorage.setItem('alarmTime', alarmTime);
    }

    function checkAlarmClock() {
    if (alarmTime === 'undefined' || !alarmTime) {
      alarmMessage = 'Pls set your alarm.';
    } else {
      alarmMessage = 'Your alarm is set for ' + alarmTime;
      if (currentTime === alarmTime) {
        setIsOpen(true)
      } 
    }
  }

  function closeDisablePortal() {
    setIsOpen(false);
    setAlarmTime(0);
  }

  function addSnooze() {
    const snoozedMinute = parseInt(alarmTime.split(':')[1]) + 5
    const snoozedHour = parseInt(alarmTime.split(':')[0]);
    const snoozedSecond = parseInt(alarmTime.split(':')[2]);
    setAlarmTime(`${snoozedHour}:${snoozedMinute}:${snoozedSecond}0`);
    setIsOpen(false);
  }


  return (
          <div className="container">
            {isOpen && <Popup onClose={closeDisablePortal} onClickBtn={addSnooze}/>}
            
            <h1 className="alarm"> My Alarm Clock </h1>
            <h2 className="alarm"> CurrentTime: {currentTime} </h2>
            <h2 className="alarm"> {alarmMessage} </h2>
            <form>
              <input type='time' onChange={SetAlarmTime1} id='clock'></input>
            </form>
          </div>
    );
}

export default App;


// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       currentTime: "",
//       alarmTime: "",
//     };
//     this.Set_Alarm_Time = this.Set_Alarm_Time.bind(this);
//   }

//   componentDidMount() {
//     this.clock = setInterval(() => this.Set_Current_Time(), 1000);
//     this.interval = setInterval(() => this.checkAlarmClock(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.clock);
//     clearInterval(this.interval);
//   }

//   Set_Current_Time() {
//     this.setState({
//       currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
//     });
//   }

//   Set_Alarm_Time(event) {
//     event.preventDefault();
//     const inputAlarmTimeModified = event.target.value + ":00";
//     this.setState({
//       alarmTime: inputAlarmTimeModified,
//     });
//   }

//   checkAlarmClock() {
//     if (this.state.alarmTime == "undefined" || !this.state.alarmTime) {
//       this.alarmMessage = "Pls set your alarm.";
//     } else {
//       this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
//       if (this.state.currentTime === this.state.alarmTime) {
//         window.location.href = 'Hello world'
//           } else {
//         console.log("not yet");
//       }
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Your Alarm Clock</h1>
//         <h2>currentTime: {this.state.currentTime}.</h2>
//         <h2>{this.alarmMessage}</h2>
//         <form>
//           <input type="time" onChange={this.Set_Alarm_Time}></input>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

