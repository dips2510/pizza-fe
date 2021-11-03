import objectAssign from "object-assign";
import initialState from "../reducers/initialState";
import { TOGGLE_MODAL } from "../constants/actionTypes";

const addonReducer = (state=initialState.addonModal, action) => {
    switch(action.type){
      case TOGGLE_MODAL:
          return objectAssign({}, state, {addonModal: action.payload || false});    
      default:
          return state;  
    }
}

export default addonReducer;