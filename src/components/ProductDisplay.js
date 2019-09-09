import React from 'react';

import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";

class ProductDisplay extends React.Component{
    state = {
        showEditor: false,
        selectedProduct: null
    };

    startEditing = product => { this.setState({ showEditor: true, selectedProduct: product }) };

    createProduct = () => { this.setState( { showEditor: true, selectedProduct: {} } ) };

    cancelEditing = () => { this.setState( {showEditor: false} ) };

    saveProduct = product => {
        this.props.saveCallback(product);
        this.setState({ showEditor: false })
    };

    renderProductEditor = () => {

        return (
            <ProductEditor key={this.state.selectedProduct.id || -1}
                           product={this.state.selectedProduct}
                           saveCallback={this.saveProduct}
                           cancelCallback={this.cancelEditing}
            />
        )
    };

    renderProductTable = () => {

        return (
            <div className="m-2">
                <ProductTable products={ this.props.products }
                              editCallback={ this.startEditing }
                              deleteCallback={ this.props.deleteCallback }
                />
                <div className="text-center">
                    <button className="btn btn-primary m-1"
                            onClick={ this.createProduct }>
                        Create Product
                    </button>
                </div>
            </div>
        )
    };

    render() {
        if ( this.state.showEditor ) {
            return this.renderProductEditor()
        } else {
            return this.renderProductTable()
        }
    }
}

export default ProductDisplay;