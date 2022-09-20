import './App.css'


function AlarmMessage({ messages, alarmMessage }) {   
    return ( 
        messages.map(() => {
         return <h2 className="alarm"> {alarmMessage} </h2>
        })
    
    )
}

export default AlarmMessage;