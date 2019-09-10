import React from 'react';

class Selector extends React.Component{

    state = { selection: React.Children.toArray(this.props.children)[0].props.name }

    setSelection = e => {
        e.persist();
        this.setState({ selection: e.target.name })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        { React.Children.map(this.props.children, c =>
                            <button name={ c.props.name }
                                    onClick={ this.setSelection }
                                    className={ `btn btn-block m-2 
                                        ${this.state.selection === c.props.name
                                        ? 'btn-primary active' : 'btn-secondary'}` } >
                                { c.pros.name }
                            </button>
                        ) }
                    </div>
                    <div className="col">
                        {
                            React.Children.toArray(this.props.children)
                                .filter(c => c.props.name === this.state.selection)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Selector;