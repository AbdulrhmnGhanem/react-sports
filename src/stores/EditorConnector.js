import { connect } from 'react-redux';

import { endEditing } from "./stateActions";
import { saveProduct, saveSupplier } from "./modelActionCreators";
import { PRODUCTS, SUPPLIERS } from "./dataTypes";

const EditorConnector = (dataType, presentationComponent) => {
    const mapStateToProps = storeData => ({
        edit: storeData.stateData.edit
            && storeData.stateData.selectedType === dataType,
        product: storeData.modelData[PRODUCTS]
            .find( p => p.id === storeData.stateData.selectedId) || {},
        supplier: storeData.modelData[SUPPLIERS]
            .find(s => s.id === storeData.stateData.selectedId) || {}
    });

    const mapDispatchToProps = dispatch =>({
        cancelCallback: () => dispatch(endEditing()),
        saveCallback: data => {
            dispatch((dataType === PRODUCTS ? saveProduct: saveSupplier)(data));
            dispatch(endEditing());
        }
        });

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent)
};

export default EditorConnector;