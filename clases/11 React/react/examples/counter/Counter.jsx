import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0,
    };

    this.addOneToCounter = this.addOneToCounter.bind(this);
    this.minusOneToCounter = this.minusOneToCounter.bind(this);
  }

  addOneToCounter() {
    const { currentCount } = this.state;
    this.setState({
      currentCount: currentCount + 1,
    });
  }

  minusOneToCounter() {
    const { currentCount } = this.state;
    this.setState({
      currentCount: currentCount - 1,
    });
  }

  render() {
    const { currentCount } = this.state;
    return (
      <div>
        <p>
          Mi contador actual es:
          {currentCount}
        </p>
        <button type="button" onClick={this.addOneToCounter}>+</button>
        <button type="button" onClick={this.minusOneToCounter}>-</button>
      </div>
    );
  }
}
