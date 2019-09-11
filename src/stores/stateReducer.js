import {
    STATE_START_CREATING,
    STATE_START_EDITING,
    STATE_END_EDITING } from './stateActions';

import { initialData } from "./initialData";

export const actionReducer = (storeData, action) => {
    switch (action.type) {
        case STATE_START_EDITING:
        case STATE_START_CREATING:
            return {
                ...storeData,
                edit: true,
                selectedId: action.type === STATE_START_EDITING
                    ? action.payload.id : -1,
                selectedType: action.dataType
            };
        case STATE_END_EDITING:
            return {
                ...storeData,
                edit: false
            }
        default:
            return storeData || initialData.stateData

    }
};
