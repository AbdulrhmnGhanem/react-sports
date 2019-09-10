import React from 'react';

class SupplierEditor extends React.Component{

    state = {
        formData: {
            id: this.props.supplier.id || '',
            name: this.props.supplier.name || '',
            city: this.props.supplier.city || '',
            products: this.props.supplier.products || []
        }
    };

    handleChange = e => {
        e.persist();
        this.setState(state =>
            state.formData[e.target.name] =
                e.target.name === 'products'
                    ? e.target.value.split(',') : e.target.value
        )
    };

    handleClick = () => {
        this.props.saveCallback({
            ...this.state.formData,
            products: this.state.formData.products.map(val => Number(val))
        });
    };

    render() {
        return (
            <div className="m-2">
                <div className="form-group">
                    <label>ID</label>
                    <input className="form-control" name="id"
                           disabled
                           value={this.state.formData.id}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name"
                           value={this.state.formData.name}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input className="form-control" name="city"
                           value={this.state.formData.city}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Products</label>
                    <input className="form-control" name="products"
                           value={this.state.formData.products}
                           onChange={this.handleChange}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary m-1" onClick={this.handleClick}>
                        Save
                    </button>
                    <button className="btn btn-secondary"
                            onClick={this.props.cancelCallback}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }

}

export default SupplierEditor;