import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    const date = new Date();
    this.state = {date: date};
  }

  render() {
    return (
      <div className="clock">
        <p className="date-time">
          <span>Date:</span>
          <span>{this.state.date.toDateString()}</span>
        </p>
        <p className="date-time">
          <span>Time:</span>
          <span>{this.state.date.toTimeString()}</span>
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


}

export default Clock;
