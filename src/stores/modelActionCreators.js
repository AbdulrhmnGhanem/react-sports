import { PRODUCTS, SUPPLIERS } from "./dataTypes";
import { STORE, DELETE, UPDATE } from "./modelActionTypes";

let idCounter = 100;

export const saveProduct = product => createSaveEvent(PRODUCTS, product);

export const saveSupplier = supplier => createSaveEvent(SUPPLIERS, supplier);

const createSaveEvent = (dataType, payload) => {
    if (!payload.id) {
        return {
            type: STORE,
            dataType,
            payload: { ...payload, id: idCounter++ }
        }
    } else {
        return {
            type: UPDATE,
            dataType,
            payload
        }
    }
};

export const deleteProduct = product => ({
    type: DELETE,
    dataType: PRODUCTS,
    payload: product.id
});

export const deleteSupplier = supplier => ({
    type: DELETE,
    dataType: supplier,
    payload: supplier.id
});