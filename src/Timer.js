import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  clock = () => {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    hour = hour >= 10 ? hour : "0" + hour;
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;

    this.setState({ h: hour, m: minute, s: second });

    setTimeout(() => {
      this.clock();
    }, 1000);
  };

  componentWillMount() {
    this.clock();
  }

  render() {
    const { h, m, s } = this.state;
    return (
      <div id="timer">
        <div className="digit">{h}</div>
        <div className="colon">:</div>
        <div className="digit">{m}</div>
        <div className="colon">:</div>
        <div className="digit">{s}</div>
      </div>
    );
  }
}

export default Timer;
