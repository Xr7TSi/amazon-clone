// rfce used here
import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'


function Subtotal() {
  return <div className="subtotal">
      <CurrencyFormat
      renderText={(value) => (
        <>
            <p>
                {/* Subtotal ({basket.length} items): */}
                Subtotal (0 items):
                <strong>{` ${value}`}</strong> 
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>
        </>    
      )}
      decimalScale={2}
    //   value={getBasketTotal(basket)}
    value={0}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
        />
    <button>Proceed to checkout</button>
  </div>
}

export default Subtotal
