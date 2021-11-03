import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { submitAddon } from '../../actions/pizzaListAction';
import "./PizzaAddon.css";
import {
  PIZZA_SIZES,
  PIZZA_TOPPINGS,
} from "../../constants/pizzaAddonsConstants";
import { displayModal } from "../../actions/addonAction";

function PizzaAddon({ submitAddon, displayModal, displayAddon, pizzaList, selectedPizza }) {
  const [error, setError] = useState('');
  const [topping, setTopping] = useState([]);
  const [size, setSize] = useState();

  const addToBasket = () => {
      if(topping.length === 0 && !size){
        setError('Please select Toppings and Size');
        return;
      }
      pizzaList.push({ pizza: selectedPizza, toppings: topping, size })
      submitAddon({ selectedPizza, pizzaList });
      clearFields();
      displayModal(false);
  };

  const selectToppings = (name) => {
    const toppingArr = topping;
    toppingArr.push(name);
    setTopping(toppingArr);
  };

  const clearFields = () => {
    setError('');
    setSize('');
    setTopping([]);
  }

  const cancelSelection = () => {
    clearFields();
    displayModal(false);
  }

  return (
    <Modal
      show={displayAddon}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="addon-toppings-wrapper">
          {PIZZA_TOPPINGS.map((item, index) => {
            return (
              <div className="addon-toppings-item" key={index}>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => selectToppings(item.name)}
                />{" "}
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className="addon-size-wrapper">
          {PIZZA_SIZES.map((item, index) => {
            return (
              <div className="addon-size-item" key={index}>
                <input type="radio" name="pizzaSize" onClick={() => setSize(item.name)}/> <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div className="addon-btn-wrapper">
          <button onClick={() => addToBasket()} className="addon-basket-btn">
            Add to Basket
          </button>
          <button className="addon-cancel-btn" onClick={()=> cancelSelection()}>Cancel</button>
        </div>
        <p className="error-submit">{error}</p>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return{
    displayAddon: state.addonModal.addonModal,
    selectedPizza: state.pizzaCard.selectedPizza,
    pizzaList: state.pizzaCard.pizzaList,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitAddon: (item) => dispatch(submitAddon(item)),
        displayModal: (val) => dispatch(displayModal(val))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PizzaAddon);
