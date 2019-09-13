import React from 'react';


class ValueInput extends React.Component{

    state = {
        fieldValue: 0
    };

    handelChange = ev => {
        this.setState({ fieldValue: ev.target.value },
            () => this.props.changeCallback(this.props.id, this.state.fieldValue))
    }

    render() {
        return <div className="form-group p-2">
            <label>Value #{ this.props.id }</label>
            <input className="form-control"
                   value={this.state.fieldValue}
                   onChange={this.handelChange}
            />
        </div>
    }
}

export default ValueInput;