import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    message: "Counter Demo"
  };

  inc = () => {
    //changes state and this will automatically trigger
    //render to be called
    this.setState({
      count: this.state.count + 1
    });
  };

  dec = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  
  render() {
    return (
      <div>
        <h1>{this.props.taco}</h1>
        <p>{this.state.count}</p>
        <button onClick={this.inc}> add 1 </button>
        <button onClick={this.dec}> minus 1 </button>
      </div>
    );
  }
}

//can only have one default export per file
export default Counter;
