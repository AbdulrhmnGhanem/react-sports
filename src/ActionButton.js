import React from 'react';

class ActionButton extends React.Component{
    render() {
        return (
            <button className={`btn btn-${this.props.theme} m-2`}
                    onClick={ this.props.callback }>
                {this.props.text}
            </button>
        )
    }
}

export default ActionButton;