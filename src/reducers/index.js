import { combineReducers } from "redux";
import pizzaListReducer from "./pizzaList.reducer";
import addonReducer from './addon.reducer';
import orderReducer from "./order.reducer";

export default combineReducers({
    pizzaCard: pizzaListReducer,
    addonModal: addonReducer,
    order: orderReducer
});