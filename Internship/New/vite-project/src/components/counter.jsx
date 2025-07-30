import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h3>Class Counter: {this.state.count}</h3>
        <button onClick={this.increment}>Increment (Class)</button>
      </div>
    );
  }
}

export default CounterClass;    