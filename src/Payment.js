import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from "./reducer";


function Payment() {

    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate stripe secret for transaction
        const getClientSecret = async () => {
            const response = await axios ({
                method: "post",
                url: `/payments/create?total=${getCartTotal(cart) }`
        })
    }
        getClientSecret()
    }, [cart]);

    const handleSubmit =  async (event) => {
        event.preventDefault();
        // set processing to true disables the buy now button so customer cant send multiple buy now requests
        setProcessing(true) 

        // const payload = await stripe
        
    }

    const handleChange = event => {
        setDisabled(event.empty);
        // if there is an error, show error.  otherwise, show nothing
        setError(event.error ? event.error.message : "")
    }

  return (
    <div className="payment">
      <div className="payment_container">
          <h1>
              Checkout (<Link to="/Checkout">{cart?.length} items</ 
              Link>)
              
          </h1>
        <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
               <p>{user?.email}</p>
               <p>123 Happy Street</p> 
               <p>Carlsbad, CA</p> 
            </div>
        </div>

        <div className="payment_section">
        <div className="payment_title">
                <h3>Review Items and Delivery</h3>
            </div>
            <div className="payment_items">
                {cart.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>


        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>

                    <div className="payment_priceContainer">
                        <CurrencyFormat
                        renderText={(value) => (
                        <>
                        <h3>Order Total: {value}</h3>
                        </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                        {/* if processing, show Processing, if not, show Buy Now */}
                        <span>{processing ? <p>Processing</p> :
                        "Buy Now"}</span>
                        </button>
                    </div>
                    {/* if there is an error, show error */}
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
     
      </div>
    </div>
  );
}

export default Payment;
