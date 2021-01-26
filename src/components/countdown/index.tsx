import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import MyToasts from './MyToasts';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import { StyledCountdown } from './styles';

// Write your countdown code in this component
export class Countdown extends React.Component {

state = {clock: 0,
         hours: 0,
         dateTime: new Date(),
         days: 0,
         hour: 0,
         minutes: 0,
         seconds: 0,
         started: false,
         success: false,
         invalidEntry: false
}
setEndTime(val: Date | Date[]): void {
    this.setState({dateTime: val});
}
getCountTime(): number {
    const x = this.state.dateTime.getTime();
    const y = new Date().getTime();
    return (x - y) / 1000;
}
onStart(): void {
    const n = this.getCountTime();
    if (n < 1 ) {
        this.setState({invalidEntry: 'true'});
        setTimeout(() => {
            this.setState({invalidEntry: 'false'});
        }, 500);
    } else {
        this.setState({hours: n});
        this.startClock(n);
    }
}
onCancel(): void {
    this.setState({started: false});
    this.setEndTime(new Date());
}
setCount(n: number): void{
    const day = Math.floor(n / (24 * 3600));
    n = n % (24 * 3600);
    const hour = Math.floor(n / 3600);
    n %= 3600;
    const minute = Math.floor(n / 60);
    n %= 60;
    const second = Math.floor(n);
    this.setState({days: day, hour: hour, minutes: minute, seconds: second })
}
startClock(n: number): void {
    if (n > 0) {
        this.setState({started: true});
        const prev = n;
        this.setCount(n);
        setTimeout(() => {
            if (prev > 1 && this.state.started) {
                this.startClock(prev - 1);
            } else {
                this.setState({hours: this.state.clock});
                if (this.state.started) {
                    this.setState({success: 'true'});
                    this.setState({success: 'false'});
                }
            }
        }, 1000);
    }
}

render() {
  return (
    <StyledCountdown className="clock-main">
    <MyToasts success={this.state.success} error={this.state.invalidEntry} />
      <div className="clock-container">
         {!this.state.started && (
              <div className="date-input-container">
                  <div>
                    <label htmlFor="time24">Select end date / time</label>
                  </div>
                  <div className="date-input">
                    <Calendar id="time24" value={this.state.dateTime} onChange={(e) => this.setEndTime(e.value)} showTime showSeconds></Calendar>
                  </div>
                  <div>
                    <button className="primary-button" onClick={() => this.onStart()}>Start</button>
                  </div>
              </div>
          )}
          {this.state.started && (
               <div>
                   <div className="container">
                      <Clock days={this.state.days} hours={this.state.hour}  minutes={this.state.minutes} seconds={this.state.seconds}></Clock>
                   </div>
                   <button className="knockout-button" onClick={() => this.onCancel()}>Cancel</button>
              </div>
          )}
      </div>
    </StyledCountdown>
  );
}
}
export default Countdown;

