import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Calendar } from 'primereact/calendar';
// import CalendarDemo from './calendar.js';
import { StyledCountdown } from './styles';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Write your countdown code in this component
export class Countdown extends React.Component {
// prime react date picker
// count down clock that calculates hours : minutes : seconds from date / time added.
// changing date picker resets clock
// dark theme green clock / red last 10 seconds, digital clock font
// animation on zero?
// email alert for zero?

state = {clock: 0,
         hours: 0,
         date8: new Date(),
         days: 0,
         hour: 0,
         minutes: 0,
         seconds: 0,
         started: false
 }


//     let today = new Date();
//     let month = today.getMonth();
//     let year = today.getFullYear();
//     let prevMonth = (month === 0) ? 11 : month - 1;
//     let prevYear = (prevMonth === 11) ? year - 1 : year;
//     let nextMonth = (month === 11) ? 0 : month + 1;
//     let nextYear = (nextMonth === 0) ? year + 1 : year;

 //   const [date8, setDate8] = useState(null);

setHours(num: any) {
    this.setState({hours: num});
}

setDate8(val: any) {
    this.setState({date8: val});
    let x = val.getTime();
    let y = new Date().getTime();
    let n = (x - y) / 1000;
    this.setState({hours: n});
}

onStart() {
    this.startClock(this.state.hours);
    this.setState({started: true});
}

startClock(n: number) {
    let prev = n;
    let day = Math.floor(n / (24 * 3600));

    n = n % (24 * 3600);
    let hour = Math.floor(n / 3600);

    n %= 3600;
    let minute = Math.floor(n / 60);

    n %= 60;
    let second = Math.floor(n);
    this.setState({days: day, hour: hour, minutes: minute, seconds: second })
    if (prev > 1) {
        setTimeout(() => {
            this.startClock(prev - 1);
        }, 1000);
    } else {
    this.setState({hours: this.state.clock});
    }
}

render() {
  return (
    <StyledCountdown className="clock-main">
      <div>
{/*           <img src="koala-logo.png" /> */}
          <div className="p-field p-col-12 p-md-4">
          <div>
            <label for="time24">Select End Date / Time</label>
          </div>
            <Calendar id="time24" value={this.state.date8} onChange={(e) => this.setDate8(e.value)} showTime showSeconds />
          </div>
          <div>{this.state.days} days, {this.state.hour} hours, {this.state.minutes} minutes, {this.state.seconds} seconds</div>
{/*           <input onChange={event => this.setHours(event.target.value)}></input> */}
          <button onClick={() => this.onStart()}>Start</button>
          {this.state.started && (<button onClick={() => this.onCancel()}>Cancel</button>)}
          <br/>
{/*             <div className="clock">{this.state.hours}</div> */}
      </div>
    </StyledCountdown>
  );
}
}
export default Countdown;

