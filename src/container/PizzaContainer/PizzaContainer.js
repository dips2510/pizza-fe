import React from "react";
import { connect } from "react-redux";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import PizzaAddon from "../../components/PizzaAddon/PizzaAddon";
import PriceBasket from "../../components/PriceBasket/PriceBasket";
import { PIZZA_CARDS } from '../../constants/pizzaAddonsConstants';
import OrderSuccess from "../../components/OrderSuccess/OrderSuccess";

function PizzaContainer({displayAddon}) {
  return (
    <section>
      <div className="pizza-cards-wrapper">
        {PIZZA_CARDS.map((item, index) => {
            return(
                <PizzaCard item={item} key={index}/>
            )
        })}
      </div>
      <div className="pizza-basket">
        <PriceBasket />
      </div>
      <PizzaAddon showModal={displayAddon} />
      <OrderSuccess showModal={true} />
    </section>
  );
}

const mapStateToProps = (state) => {
  return{
    displayAddon: state.addonModal
  }
}

export default connect(mapStateToProps,{})(PizzaContainer);
