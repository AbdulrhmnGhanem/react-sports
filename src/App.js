import React from 'react';
import { Provider } from 'react-redux';

import dataStore from './stores';
import Selector from "./routes/Selector";
import { ProductDisplay } from "./components/products/ProductDisplay";
import { SupplierDisplay } from "./components/suppliers/SupplierDisplay";

const App = () => {
  return (
      <Provider store={ dataStore }>
        <Selector>
          <ProductDisplay name="Products" />
          <SupplierDisplay name="Suppliers" />
        </Selector>
      </Provider>
  )
};


export default App;
