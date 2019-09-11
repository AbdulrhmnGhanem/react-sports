import { createStore, combineReducers } from "redux";

import { actionReducer as stateReducer } from "./stateReducer";
import {actionReducer as modelReducer} from "./modelReducer";

const store = combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
});

export default createStore(store);

export {
    saveProduct,
    saveSupplier,
    deleteProduct,
    deleteSupplier } from "./modelActionCreators";