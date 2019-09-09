import React from 'react';

class ThemeSelector extends React.Component{

    state = { theme: "primary" };

    themes = ["primary", "secondary", "success", "warning", "dark"];

    setTheme = e => { this.setState( { theme: e.target.value } ) };

    render() {
        let modChildren = React.Children.map(this.props.children,
            (child => React.cloneElement(child, { theme: this.state.theme })));
        return (
            <div className="bg-dark p-2">
                <div className="form-group text-left">
                    <label className="text-white">Theme:</label>
                    <select className="form-control" value={this.state.theme}
                            onChange={ this.setTheme }>
                        {this.themes.map(theme =>
                            <option key={ theme } value={ theme }>{ theme }</option>
                        )}
                    </select>
                </div>
                <div className="bg-info p-2">
                    { modChildren }
                </div>
            </div>
        )
    }
}

export default ThemeSelector;