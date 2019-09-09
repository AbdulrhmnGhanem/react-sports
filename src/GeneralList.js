import React from 'react';

class GeneralList extends React.Component{
    render() {
        return (
            <div className={`bg-${this.props.theme} text-white p-2`}>
                { this.props.list.map((item, index) =>
                    <div key={item}>{ index + 1 }: { item }</div> ) }
            </div>
        )
    }
}

export default GeneralList;