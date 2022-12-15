// import { ActionTypes } from "../contants/action-types";

// const initialstate =  {
//     products:[]

// };

// export const productReducer = (state = initialstate,{type, payload}) => {
//     switch (type){
//         case ActionTypes.SET_PRODUCTS:
//             return {...state,products: payload};
//      default:
//            return state;
        
//     }
// };

import { createSlice} from '@reduxjs/toolkit'

const initialstate =  {
    products:[""],

};

export const productSlice = createSlice({
    name: 'product',
    initialState: initialstate,
    reducers: {
        SET_PRODUCTS : (state, action) => {
            state.products.push(action.payload)
        }
    }
})


export const { SET_PRODUCTS } = productSlice.actions
export default productSlice.reducer






