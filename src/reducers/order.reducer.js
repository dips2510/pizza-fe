import initialState from "./initialState";
import objectAssign from "object-assign";
import { SUBMIT_ORDER, RESET_ORDER } from "../constants/actionTypes";


const orderReducer = (state=initialState.order, action) => {
    switch(action.type){
        case  SUBMIT_ORDER:
          return objectAssign({}, state, {response: action.payload, display: true});  
        case RESET_ORDER:
            return objectAssign({}, state, {display: false});  
        default:
            return state;  
    }
}

export default orderReducer;