import React, { useState } from "react";
import { connect } from "react-redux";
import "./PizzaCard.css";
import pizza1 from "../../assets/images/pizzacard1.png";
import { displayModal } from "../../actions/addonAction";
import { submitPizzaItem } from '../../actions/pizzaListAction';

function PizzaCard({ item, displayModal, displayAddon, submitPizzaItem }) {

  const selectPizza = (item) => {
    displayModal(true);
    submitPizzaItem({ selectedPizza: item});
  };
  return (
    <div className="pizza-card">
      <div className="pizza-card-img">
        <img src={pizza1} alt="" className="pizza-img" />
      </div>
      <div className="pizza-card-content">
        <p className="pizza-price">
          {item.name} - {item.currency}
          {item.price}
        </p>
        <button onClick={() => selectPizza(item)} className="pizza-card-button">
          Choose
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
      displayAddon: state.addonModal
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    submitPizzaItem: (item) => dispatch(submitPizzaItem(item)),
    displayModal: (item) => dispatch(displayModal(item))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PizzaCard);
