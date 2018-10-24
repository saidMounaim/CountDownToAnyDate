import React, { Component } from 'react'
import '../App.css';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount = () => {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount = () => {
        setInterval( () => this.getTimeUntil(this.props.deadline), 1000);
    }

    plus0 = (num) => {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }

    getTimeUntil = (deadline) => {
        const time      = Date.parse(deadline) - Date.parse(new Date());
        const seconds   = Math.floor((time/1000) % 60);
        const minutes   = Math.floor((time/1000/60) % 60);
        const hours     = Math.floor(time/(1000*60*60) % 24);
        const days      = Math.floor(time/(1000*60*60*24));
        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

  render() {
    return (
      <React.Fragment>
        <div id="timer">
            <div className="days">
                <div className="numbers">{this.plus0(this.state.days)} days</div>
            </div>
            <div className="hours">
                    <div className="numbers">{this.plus0(this.state.hours)} hours</div>
            </div>
            <div className="minutes">
                    <div className="numbers">{this.plus0(this.state.minutes)} minutes</div>
            </div>
            <div className="seconds">
                    <div className="numbers">{this.plus0(this.state.seconds)} seconds</div>
            </div>
        </div>        
      </React.Fragment>
    )
  }
}
export default Clock;