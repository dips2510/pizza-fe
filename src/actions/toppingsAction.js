import { FETCH_TOPPINGS } from "../constants/actionTypes"


export const fetchToppings = () => dispatch => {
    console.log('fetch toppings called from red');
    dispatch({ type: FETCH_TOPPINGS });
}