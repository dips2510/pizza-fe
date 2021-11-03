import config from "../config";
import { RESET_ORDER, SUBMIT_ORDER } from "../constants/actionTypes";

export const submitOrder = (obj) => {
  return {
    type: SUBMIT_ORDER,
    payload: obj,
  };
};

export const resetOrder = (obj) => {
  return {
    type: RESET_ORDER,
    payload: false,
  };
};

export const postOrder = (obj) => {
  //Post call to submit Order
  const options = {
    method: "POST",
    url: config.apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };

  return fetch(config.apiUrl, options)
    .then((res) =>  res.json())
    .catch(err => console.log(err))
};
