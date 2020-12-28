import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor");
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // console.log("componentDidMount");
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
