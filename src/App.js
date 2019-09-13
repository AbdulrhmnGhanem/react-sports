import React from 'react';
import Result from "./Result";
import ValueInput from "./ValueInput";

class App extends React.Component{

  state = {
    title: this.props.title || 'Simple Addition' ,
    fieldValue: [],
    total: 0
  };

  updateFieldValue = (id, value) => {
    this.setState(state => {
      state.fieldValue[id] = Number(value);
      return state
    })
  };

  updateTotal = () => {
    this.setState(state => ({
      total: state.fieldValue.reduce((total, val) => total += val)
    }))
  };

  render() {
    return <div className="m-2">
      <h5 className="bg-primary text-white text-center p-2">
        {this.state.title}
      </h5>
      <Result result={this.state.total}/>
      <ValueInput id="1" changeCallback={this.updateFieldValue}/>
      <ValueInput id="2" changeCallback={this.updateFieldValue}/>
      <ValueInput id="3" changeCallback={this.updateFieldValue}/>
      <div className="text-center">
        <button className="btn btn-primary" onClick={this.updateTotal}>
          Total
        </button>
      </div>
    </div>
  }
}

export default App;
