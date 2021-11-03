import { TOGGLE_MODAL } from "../constants/actionTypes";

export const displayModal = (val) => {
  return {
    type: TOGGLE_MODAL,
    payload: val
  }
};
