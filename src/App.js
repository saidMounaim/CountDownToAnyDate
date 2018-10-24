import React, { Component } from 'react';
import Clock from './Components/Clock';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 7, 2018',
      newdeadline: ''
    }
  }

  changeDeadLine = () => {
    this.setState({
      deadline: this.state.newdeadline  
    })
  };

  render() {
    return (
      <div className="App">
        <h2>Countdown To {this.state.deadline}</h2>
        <div className="container">
          <div className="balloon white">
            <div className="star-red"></div>
            <div className="face">
              <div className="eye"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="triangle"></div>
            <div className="string"></div>
          </div>

          <div className="balloon red">
            <div className="star"></div>
            <div className="face">
              <div className="eye"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="triangle"></div>
            <div className="string"></div>
          </div>

          <div className="balloon blue">
            <div className="star"></div>
            <div className="face">
              <div className="eye"></div>
              <div className="mouth happy"></div>
            </div>
            <div className="triangle"></div>
            <div className="string"></div>
          </div>
          <Clock deadline={this.state.deadline}/>
          <div className="input-effect">
            <input onChange={event => this.setState({newdeadline: event.target.value})} placeholder="New Date" />
            <button onClick={() => this.changeDeadLine()} >Submit</button>
          </div>
        </div>
        <footer>
          <p>made by <a href="https://fb.com/apiyaue06"> Said Mounaim</a> ♡</p>
        </footer>
      </div>
    );
  }
}

export default App;
