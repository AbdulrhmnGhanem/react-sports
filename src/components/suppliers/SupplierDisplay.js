import React from 'react';
import { connect } from 'react-redux';

import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";
import EditorConnector from "../../stores/EditorConnector";
import TableConnector from "../../stores/TableConnector";
import { SUPPLIERS } from "../../stores/dataTypes";
import { startCreatingSupplier } from "../../stores/stateActions";


const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);

const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable);

const mapStateToProps = storeData => ({
    edit: storeData.stateData.edit,
    selected: storeData.modelData.suppliers
        .find(s => s.id === storeData.stateData.selectedId) || {}
});

const mapDispatchToProps = {
    createSupplier: startCreatingSupplier
};

const connection = connect(mapStateToProps, mapDispatchToProps);

export const SupplierDisplay = connection(
    class extends React.Component {

        render() {
            if (this.props.edit) {
                return <ConnectedEditor key={ this.props.selectedId || -1 } />
            } else {
                return (
                    <div className="m-2">
                        <ConnectedTable />
                        <div className="text-center">
                            <button className="btn btn-primary m-1"
                                    onClick={this.props.createSupplier}>
                                Create Supplier
                            </button>
                        </div>
                    </div>
                )
            }

        }
    });
