import React from 'react';
import { connect } from 'react-redux';

import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";
import { saveProduct, deleteProduct  } from "../../stores";


const mapStateToProps = storeData => ({
    products: storeData.products
});

const mapDispatchToProps = {
    saveCallback: saveProduct,
    deleteCallback: deleteProduct
};

const connection = connect(mapStateToProps, mapDispatchToProps);

export const ProductDisplay = connection (
    class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                showEditor: false,
                selectedProduct: null
            }
        }


        edit = product => {
            this.setState({showEditor: true, selectedProduct: product})
        };

        createProduct = () => {
            this.setState({showEditor: true, selectedProduct: {}})
        };

        cancelEdit = () => {
            this.setState({showEditor: false, selectedProduct: null})
        };

        saveProduct = (product) => {
            this.props.saveCallback(product);
            this.setState({showEditor: false, selectedProduct: null})
        };

        renderEditor = () => {
            return (
                <ProductEditor key={this.state.selectedProduct.id || -1}
                               product={this.state.selectedProduct}
                               saveCallback={this.saveProduct}
                               cancelCallback={this.cancelEdit}/>
            )
        };

        render() {

            if (this.state.showEditor) {
                return this.renderEditor()
            } else {
                return (
                    <div className="m-2">
                        <ProductTable products={this.props.products}
                                      editCallback={this.edit}
                                      deleteCallback={this.props.deleteCallback}/>
                        <div className="text-center">
                            <button className="btn btn-primary m-1"
                                    onClick={this.createProduct}>
                                CreateProduct
                            </button>
                        </div>
                    </div>
                )
            }

        }

    })

export default ProductDisplay;