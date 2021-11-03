import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./PriceBasket.css";
import { removeAddon } from "../../actions/pizzaListAction";
import { submitOrder, postOrder } from "../../actions/orderAction";

function PriceBasket({ pizzaCard, removeAddon, submitOrder }) {
  const [total, setTotal] = useState(0);
  const removePizza = (ids, sze, tppngs) => {
    const filteredList = pizzaCard.pizzaList.filter((item) => {
      return (
        item.pizza.id !== ids ||
        item.size !== sze ||
        JSON.stringify(item.toppings) !== JSON.stringify(tppngs)
      );
    });
    removeAddon({
      selectedPizza: pizzaCard.selectedPizza,
      pizzaList: filteredList,
    });
  };

const checkoutOrder = () => {
    postOrder(pizzaCard.pizzaList).then(data=>{
        submitOrder(data);
    })
    
}
  useEffect(() => {
    let amount = 0;
    const totalAmount = pizzaCard.pizzaList.map((item) => {
      return (amount = amount + item.pizza.price);
    })[0];
    setTotal(amount);
  }, [pizzaCard]);

  return (
    <Fragment>
      <div className="price-basket-wrapper">
        <div className="price-basket-item">
          {pizzaCard.pizzaList.map((item, index) => {
            return (
              <div className="price-basket-item-unit" key={index}>
                <div className="price-basket-selected">
                  <span
                    className="price-basket-cross"
                    onClick={() =>
                      removePizza(item.pizza.id, item.size, item.toppings)
                    }
                  >
                    x
                  </span>
                  <p className="price-basket-item-name" key={item.pizza.id}>
                    <span>1 x </span>
                    {item.pizza.name}{" "}
                  </p>
                  <p className="price-basket-item-price">
                    {item.pizza.currency}
                    {item.pizza.price}
                  </p>
                </div>
                <p className="price-basket-addon">
                  <span>{item.size}</span>
                  {item.toppings.map((topping, index) => {
                    return <span key={index}>{topping}</span>;
                  })}
                </p>
              </div>
            );
          })}
          {pizzaCard.pizzaList.length === 0 && <p>No items in your basket</p>}
        </div>
        <div className="price-basket-amount">
          <h3>Total</h3>
          {total > 0 && <h5>${total}</h5>}
        </div>
        <div>
          <button
            onClick={() => checkoutOrder()}
            className={
              total > 0
                ? "price-basket-checkout btn-enable"
                : "price-basket-checkout"
            }
          >
            Checkout
          </button>
        </div>
      </div>
      {pizzaCard.pizzaList.length === 0 && (
        <div className="price-basket-empty">
          <p> Empty Basket</p>
        </div>
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  pizzaCard: state.pizzaCard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeAddon: (item) => dispatch(removeAddon(item)),
    submitOrder: (obj) => dispatch(submitOrder(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceBasket);
