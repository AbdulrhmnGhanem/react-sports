import React from 'react';

class Message extends React.Component{

    render() {
        return (
            // eslint-disable-next-line
            <div className={ `h5 bg-${this.props.theme} text-white p-2` }>
                {this.props.message}
            </div>

        )
    }
}

export default Message;