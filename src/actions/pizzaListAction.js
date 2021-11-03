import { ADD_PIZZA, ADD_ADDON, REMOVE_ADDON } from "../constants/actionTypes";

export const submitPizzaItem = (item) => {
  return {
    type: ADD_PIZZA,
    payload: item
  }
};

export const submitAddon = (obj) => {
  return {
    type: ADD_ADDON,
    payload: obj
  }
}

export const removeAddon = (obj) => {
  return {
    type: REMOVE_ADDON,
    payload: obj
  }
}
