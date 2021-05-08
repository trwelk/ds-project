import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[{
        id:1,
        title:"Trewoon",
        category:"human"
    }]
}
export const productReducer = (state = initialState,{type,action}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return state;
    
        default:
            return state;
    }
}