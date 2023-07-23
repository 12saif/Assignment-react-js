import React from "react";
import "./GoToCart.css";

const GoToCart = ({ setShow, size }) => {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            My Shoping
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span></span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GoToCart;
