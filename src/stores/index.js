import { createStore } from "redux";
import actionReducer from "./modelReducer";

export default createStore(actionReducer);

export {
    saveProduct,
    saveSupplier,
    deleteProduct,
    deleteSupplier } from "./modelActionCreators";