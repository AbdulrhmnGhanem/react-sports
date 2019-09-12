import React, {Component} from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { ProductDisplay } from "./products/ProductDisplay";
import { SupplierDisplay } from "./suppliers/SupplierDisplay";


class Selector extends Component {

    render() {
        return(
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div><Link to="/">Default URL</Link></div>
                            <div><Link to="/products">Products</Link></div>
                            <div><Link to="/suppliers">Suppliers</Link></div>
                        </div>
                        <div className="col">
                            <Switch>
                                <Route path="/products" component={ ProductDisplay } />
                                <Route path='/suppliers' component={ SupplierDisplay } />
                                <Redirect to="/products"/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )}
}

export default Selector;