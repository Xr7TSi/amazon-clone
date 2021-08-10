import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Sawyer Mini Filter</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/81Dhvd3jvCL._AC_SY400_.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
