import React from 'react';


const RouteInfo = props => {
    const renderTable = (title, prop, propertyName) => {
        return <React.Fragment>
            <tr><th colSpan="2" className="text-center">{ title }</th></tr>
            { propertyName.map(p =>
                <tr key={ p }>
                    <td>{ p }</td>
                    <td>{  JSON.stringify(prop[p]) }</td>
                </tr>) }
        </React.Fragment>
    };
    return <div className="bg-info m-2 p-2">
        <h4 className="text-white text-center">Route Info</h4>
        <table className="table table-sm table-striped bg-light">
            <tbody>
            { renderTable("Match", props.match,
                ["url", "path", "params", "isExact"]) }
            </tbody>
        </table>
    </div>
};

export default RouteInfo;