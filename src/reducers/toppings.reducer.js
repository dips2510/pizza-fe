import { FETCH_TOPPINGS, FETCH_SIZE } from "../constants/actionTypes";
import initialState from "./initialState";

const toppingsReducer = (state = initialState.pizzaToppings, action) => {
    switch(action.type){
        case FETCH_TOPPINGS:
            return state
        case FETCH_SIZE:
            return initialState.pizzaSize;
        default:
        return state;
    }
}

export default toppingsReducer;
