import React from 'react';
import { Provider } from 'react-redux';

import ProductsAndSuppliers from "./ProductsAndSuppliers";
import dataStore from './stores';

const App = () => {
  return (
      <Provider store={dataStore}>
        <ProductsAndSuppliers/>
      </Provider>
  )
};


export default App;
