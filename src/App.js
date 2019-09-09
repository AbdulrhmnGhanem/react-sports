import React from 'react';

import Message from "./Message";
import ActionButton from "./ActionButton";
import ThemeSelector from "./ThemeSelector";

class App extends React.Component {

  state = { counter: 0 };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  };

  render() {
    return (
        <div className="m-2 text-center">
          <ThemeSelector>
          <Message theme="primary"
                   message={`Counter: ${this.state.counter}`}/>
          <ActionButton theme="secondary"
                        text="increment"
                        callback={this.incrementCounter}/>
          </ThemeSelector>
        </div>
    )
  }
}

export default App;