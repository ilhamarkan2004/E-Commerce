import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.counter}</h1>
        <button
          className="bg-black text-white p-2"
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
