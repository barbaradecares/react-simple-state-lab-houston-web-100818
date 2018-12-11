import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super();

    this.state = {
      color: props.value
    };
  }
  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={this.clicking}
      />
    );
  }

  clicking = () => {
    this.setState(state => (state.color = "#333"));
  };
}
