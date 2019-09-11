import { PRODUCTS, SUPPLIERS } from "./dataTypes";

export const STATE_START_EDITING = 'STATE_START_EDITING';
export const STATE_END_EDITING = 'STATE_END_EDITING';
export const STATE_START_CREATING = 'STATE_START_CREATING';


export const startEditingProduct = product => ({
    type: STATE_START_EDITING,
    dataType: PRODUCTS,
    payload: product
});

export const startEditingSupplier = supplier => ({
    type: STATE_START_EDITING,
    dataType: PRODUCTS,
    payload: supplier
});

export const endEditing = () => ({
    type: STATE_END_EDITING
});

export const startCreatingProduct = () => ({
    type: STATE_START_CREATING,
    dataType: PRODUCTS
});
export const startCreatingSupplier = () => ({
    type: STATE_START_CREATING,
    dataType: SUPPLIERS
});

