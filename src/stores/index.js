import { createStore, combineReducers} from "redux";

import { actionReducer as stateReducer } from "./stateReducer";
import {actionReducer as modelReducer} from "./modelReducer";


const reducers = combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
});

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export {
    saveProduct,
    saveSupplier,
    deleteProduct,
    deleteSupplier } from "./modelActionCreators";