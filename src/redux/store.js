import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer';

const store = configureStore({
    reducer: {
        product: productReducer,
    },
    //  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    
});

export default store;
