import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {

    const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
               <p>{user?.email}</p> 
            </div>
        </div>

        <div className="payment_section"></div>
        <div className="payment_section"></div>
        <div className="payment_section"></div>
        <div className="payment_section"></div>
        <div className="payment_section"></div>
      </div>
    </div>
  );
}

export default Payment;
