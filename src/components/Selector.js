import React, {Component} from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { ProductDisplay } from "./products/ProductDisplay";
import { SupplierDisplay } from "./suppliers/SupplierDisplay";


class Selector extends Component {

    render() {
        return(
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <NavLink className="m-2 btn btn-block btn-primary"
                                     activeClassName="active"
                                     to="/">Default URL</NavLink>
                            <NavLink className="m-2 btn btn-block btn-primary"
                                     activeClassName="active"
                                     to="/products" >Products</NavLink>
                            <NavLink className="m-2 btn btn-block btn-primary"
                                     activeClassName="active"
                                     to="/suppliers" replace>Suppliers</NavLink>
                        </div>
                        <div className="col">
                            <Switch>
                                <Route path="/products" component={ ProductDisplay } />
                                <Route path='/suppliers' component={ SupplierDisplay }  />
                                <Redirect to="/products"/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )}
}

export default Selector;