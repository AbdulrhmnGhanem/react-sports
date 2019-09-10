import React from 'react';

import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";

class ProductDisplay extends React.Component {

    state = {
        showEditor: false,
        selectedProduct: null
    };

    edit = product => {
        this.setState({ showEditor: true, selectedProduct: product })
    };

    createProduct = () => {
        this.setState({ showEditor: true, selectedProduct: {} })
    };

    cancelEdit = () => {
        this.setState({ showEditor: false, selectedProduct: null })
    };

    saveProduct = (product) => {
        this.props.saveCallback(product);
        this.setState({ showEditor: false, selectedProduct: null })
    };

    renderEditor = () => {
        return (
            <ProductEditor key={this.state.selectedProduct.id || -1}
                           product={this.state.selectedProduct}
                           saveCallback={this.saveProduct}
                           cancelCallback={this.cancelEdit} />
        )
    };

    render() {

        if (this.state.showEditor) {
            return this.renderEditor()
        } else {
            return (
                <div className="m-2">
                    <ProductTable products={ this.props.product }
                                  editCallback={ this.edit }
                                  deleteCallback={ this.props.deleteCallback } />
                    <div className="text-center">
                        <button className="btn btn-primary m-1"
                                onClick={ this.createProduct }>
                            CreateProduct
                        </button>
                    </div>
                </div>
            )
        }

    }

}

export default ProductEditor;