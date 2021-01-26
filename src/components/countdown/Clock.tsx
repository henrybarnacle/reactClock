import React from 'react';
import ReactDOM from 'react-dom';
import ClockInterface from '../../interfaces';

export class Clock extends React.Component<ClockInterface, ClockInterface> {
constructor(props: ClockInterface) {
super(props);
}
render() {
    return (
        <div>
            <div className="p-grid">
                <div className="p-col-3 countdown-unit">
                    <div className="box clock-content">{this.props.days}</div>
                    <div className="clock-label">days</div>
                </div>
                <div className="p-col-3 countdown-unit">
                    <div className="box clock-content">{this.props.hours}</div>
                    <div className="clock-label">hours</div>
                </div>
                <div className="p-col-3 countdown-unit">
                    <div className="box clock-content">{this.props.minutes}</div>
                    <div className="clock-label">minutes</div>
                </div>
                <div className="p-col-3 countdown-unit">
                    <div className="box clock-content">{this.props.seconds}</div>
                    <div className="clock-label">seconds</div>
                </div>
            </div>
        </div>
    )
}

}

export default Clock;