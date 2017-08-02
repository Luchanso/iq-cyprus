import React, { Component } from 'react';
import bg from './cyprus.jpg';
import './App.css';

class App extends Component {
  componentDidMount() {
    setInterval(() => { this.forceUpdate(); }, 1);
  }

  render() {
    const calculated = new Date(2017, 8, 18).getTime() - Date.now();

    let ms = calculated % 1000;
    let sec = Math.floor(calculated / 1000) % 60;
    let min = Math.floor(calculated / 1000 / 60) % 60;
    let hours = Math.floor(calculated / 1000 / 60 / 60) % 24;
    let days = Math.floor(calculated / 1000 / 60 / 60 / 24);

    if (ms < 10) ms = '0' + ms;
    if (ms < 100) ms = '0' + ms;
    if (sec < 10) sec = '0' + sec;
    if (min < 10) min = '0' + min;
    if (days < 10) days = '0' + days;

    return (
      <div className="App">
        <div className="Wrapper">
          <p className="Label">Уже скоро!<br />{days} days {hours}:{min}:{sec}.{ms}</p>
        </div>
      </div>
    );
  }
}

export default App;
