import React from 'react';

/*import Message from "./Message";
import ActionButton from "./ActionButton";
import ThemeSelector from "./ThemeSelector";*/
import GeneralList from "./GeneralList";
import SortedList from "./SortedList";
// import ProFeature from "./ProFeature";
import ProController from "./ProController";
const ProList = ProController(SortedList);

class App extends React.Component {

  state = {
    names: ["Ali", "Mohamed", "Abbas", "Zol", "Dori"],
    cities: ["London", "NewYork", "Paris", "Milan", "Boston"],
    proMode: false
  };

  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode })
  };

/*  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  };*/

  render() {
    return (

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center p-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input"
                       value={this.state.proMode}
                       onChange={this.toggleProMode}/>
                <label className="form-check-label">Pro Mode</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 ">
              <GeneralList list={this.state.names} theme="primary" />
            </div>
            <div className="col-3 ">
              <ProList list={this.state.names} />
            </div>
            <div className="col-3">
              <GeneralList list={ this.state.cities } theme="primary" />
            </div>
            <div className="col-3 ">
              <ProList list={this.state.cities} />
            </div>

          </div>
        </div>
    )
  }
}

export default App;