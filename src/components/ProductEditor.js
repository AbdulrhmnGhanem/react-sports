import React from 'react';

class ProductEditor extends React.Component{

    state = {
        formData: {
            id: this.props.id || '',
            name: this.props.name || '',
            category: this.props.product.category || '',
            price: this.props.product.price || ''
        }
    };

    handleChange = ev => {
        ev.persist();
        this.setState( state => state.formData[ev.target.name] = ev.target.value  )
    };

    handleClick = ev => {
        this.props.saveCallback( this.state.formData )
    }

    render() {
        return (
            <div className="m-2">
                <div className="form-group">
                    <label>ID</label>
                    <input className="form-control"
                           name="id"
                           disabled
                           value={this.state.formData.id}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"
                           name="name"
                           value={this.state.formData.name}
                           onChange={this.handleChange}
                    />

                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input className="form-control"
                           name="category"
                           value={this.state.formData.category}
                           onChange={this.handleChange}
                    />

                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control"
                           name="price"
                           value={this.state.formData.price}
                           onChange={this.handleChange}
                    />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary m-1"
                            onClick={this.handleClick}>
                        Save
                    </button>
                    <button className="btn btn-secondary "
                            onClick={this.props.cancelCallback}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductEditor;