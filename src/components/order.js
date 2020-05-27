import React, { useEffect } from "react";

import "../styles/order.css";

import cross from "../images/icons/cross.png";

import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

const Content = (basket, setBasket) => {
  function removeFromBasket(item) {
    // TEMP SOLUTION, USE ID's
    let newBasket = basket.filter((b) => b.name !== item.name);
    setBasket(newBasket);
  }

  return basket.map((item, index) => (
    <div className="order-container" key={index}>
      <img src={item.image} alt={item.name} className="order-img" />
      <div className="order-card">
        <div className="order-text-container">
          <div className="order-title">{item.name}</div>
          <div className="order-price">£{item.price}</div>
        </div>
        <div className="order-cross" onClick={() => removeFromBasket(item)}>
          <img src={cross} alt="Delete" className="order-cross-img" />
        </div>
      </div>
    </div>
  ));
};

const Info = (basket) => {

    let totalCost = 0.00
    let deliveryCost = 20.00
    basket.forEach(item => totalCost += +item.price)

    let total = totalCost + deliveryCost



  return (
    <div id="cost-container">
        <span className="header">
            Costings
            <hr style={{marginTop: 16, marginBottom: 14}}/>
        </span>
        <div className="cost-subcontainer">
            <div style={{flexGrow: 1}}>
                <div>Item Charge: £{totalCost.toFixed(2)}</div>
                <div>Delivery Charge: £{deliveryCost.toFixed(2)}</div>
            </div>
            <div className="cost-total">£{total.toFixed(2)}</div>
        </div>
    </div>
  );
};

const Item = () => {};

const Order = ({ basket, setBasket }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    type: "Order",
    header: "Your orders...",
    content: basket.length
      ? Content(basket, setBasket)
      : "You currently have no items in your basket.",
    info: Info(basket),
    button: true,
    buttonText: "Confirm Order",
    imageHeight: '68%'
  };

  return (
    <div>
      <Header basket={basket} />
      <Body data={data} basket={basket} setBasket={setBasket} />
      <Footer />
    </div>
  );
};

export default Order;
