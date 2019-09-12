import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { ProductDisplay } from "../components/products/ProductDisplay";
import { SupplierDisplay } from "../components/suppliers/SupplierDisplay";
import RouteInfo from "./RouteInfo";


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
                            <NavLink className="m-2 btn btn-block btn-primary"
                                     activeClassName="active"
                                     to="/info" replace>Route info</NavLink>
                        </div>
                        <div className="col">
                            <Switch>
                                <Route path="/products" component={ ProductDisplay } />
                                <Route path='/suppliers' component={ SupplierDisplay }  />
                                <Route path='/info' component={ RouteInfo }  />
                                <Redirect to="/products"/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )}
}

export default Selector;