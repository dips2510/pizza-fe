import objectAssign from "object-assign";
import { ADD_ADDON, ADD_PIZZA, REMOVE_ADDON } from "../constants/actionTypes";
import initialState from "./initialState";

const pizzaListReducer = (
  state = initialState.pizzaCard,
  action
) => {
  switch (action.type) {
    case ADD_PIZZA:
      const { selectedPizza } = action.payload;
      return objectAssign({}, state, { selectedPizza });
    case ADD_ADDON:
      return objectAssign({}, state, action.payload);
    case REMOVE_ADDON:
      return objectAssign({}, state, action.payload); 
    default:
      return state;
  }
}

export default pizzaListReducer;