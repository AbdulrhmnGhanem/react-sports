import React from 'react';

import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";

class SupplierDisplay extends React.Component {

    state = {
        showEditor: false,
        selected: null
    };

    edit = supplier => {
        this.setState({
            showEditor: true,
            selected: supplier
        })
    };

    createSupplier = () => {
        this.setState({ showEditor: true, selected: {} })
    };

    cancelEdit = () => {
        this.setState({ showEditor: false, selected: null })
    };

    saveSupplier = supplier => {
        this.props.saveCallback(supplier);
        this.setState({ showEditor: false, selected: null })
    };

    renderSupplierEditor = () => {
      return <SupplierEditor key={ this.state.selected.id }
                             supplier={ this.state.selected }
                             saveCallback={ this.saveSupplier }
                             cancelCallback={ this.cancelEdit} />
    };

    render() {
        if (this.state.showEditor) {
                return this.renderSupplierEditor()
        } else {
            return (
                <div className="m-2">
                    <SupplierTable suppliers={ this.props.suppliers }
                                   editCallback={ this.edit }
                                   deleteCallback={ this.props.deleteCallback }
                    />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                                onClick={this.createSupplier} >
                            Create
                        </button>
                    </div>
                </div>
            )
        }

    }
}

export default SupplierDisplay;