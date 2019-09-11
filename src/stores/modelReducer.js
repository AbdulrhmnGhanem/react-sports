import { STORE, DELETE, UPDATE } from "./modelActionTypes";
import {initialData} from "./initialData";


const actionReducer = (storeData, action) => {

    switch (action) {
        case STORE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType].concat()
            };
        case UPDATE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType]
                    .map(p => p.id === action.payload.id ? action.payload :p)
            };
        case DELETE:
            return {
                ...storeData,
                [action.dataType]: storeData[action.dataType]
                    .filter(p => p.id !== action.payload )
            };
        default:
            return storeData || initialData
    }

};

export default actionReducer;