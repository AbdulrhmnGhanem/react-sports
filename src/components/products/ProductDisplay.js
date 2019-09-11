import React from 'react';
import { connect } from 'react-redux';

import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";
import EditorConnector from "../../stores/EditorConnector";
import TableConnector from "../../stores/TableConnector";
import {PRODUCTS} from "../../stores/dataTypes";
import {startCreatingProduct} from "../../stores/stateActions";


const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(PRODUCTS, ProductTable);

const mapStateToProps = storeData => ({
    edit: storeData.stateData.edit,
    selected: storeData.modelData.products
        .find(p => p.id === storeData.stateData.selectedId)
});

const mapDispatchToProps = {
    createProduct: startCreatingProduct
};

const connection = connect(mapStateToProps, mapDispatchToProps);

export const ProductDisplay = connection (
    class extends React.Component {

        render() {

            if (this.props.edit) {
                return <ConnectedEditor key={this.props.selectedId || -1} />
            } else {
                return (
                    <div className="m-2">
                        <ConnectedTable />
                        <div className="text-center">
                            <button className="btn btn-primary m-1"
                                    onClick={this.props.createProduct}>
                                Create Product
                            </button>
                        </div>
                    </div>
                )
            }
        }
    });
