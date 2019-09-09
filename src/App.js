import React from 'react';

/*import Message from "./Message";
import ActionButton from "./ActionButton";
import ThemeSelector from "./ThemeSelector";*/
import GeneralList from "./GeneralList";
import SortedList from "./SortedList";


class App extends React.Component {

  state = { names: ["Ali", "Mohamed", "Abbas", "Zol", "Dori"] };

/*  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  };*/

  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <GeneralList list={this.state.names} theme="primary" />
            </div>
            <div className="col-6">
              <SortedList list={ this.state.names } />
            </div>

          </div>
        </div>
    )
  }
}

export default App;