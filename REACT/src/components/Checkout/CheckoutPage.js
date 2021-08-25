import React, { useState } from "react"
import './Checkout.scss'
import Counter from '../../components/ProductPage/Counter.js'
import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';

const CheckoutPage = cartItems => {

    return(

        <>
        <Header/>
        <div className="checkout">
            
            <div className="checkout__header">

                <div className="checkout__header-product">
                    PRODUCT
                </div>
                <div className="checkout__header-price">
                    PRICE
                </div>
                <div className="checkout__header-quantity">
                    QTY
                </div>
                <div className="checkout__header-price">
                    UNIT PRICE
                </div>
                
            </div>

            <div className="checkout__item">
                
            { cartItems.length === 0 && (
                <div className="cart-items-empty">No items are added</div>
            )}
{/* 
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt={item.name}/>
                    </div>
                ))}
            </div> */}

                <div className="checkout__item-remove">
                    X
                </div>
                <div className="checkout__item-image">
                    TESTIMAGE
                </div>
                <div className="checkout__item-name">
                    PRODUCTNAME
                </div>
                <div className="checkout__item-totalprice">
                    PRICE
                </div>
                <div className="checkout__item-quantity">
                    <Counter />
                </div>
                <div className="checkout__item-price">
                    PRODUCT
                </div>
                
            </div>
            <div className="checkout__payment">

                <div className="voucher">
                    <input type="text" placeholder="Voucher code"></input>
                    <button>Redeem</button>
                </div>

                <div className="computation">
                    <form>
                    <div className="computation__subtotal">
                       <div className="tag"> Subtotal </div> <div className="value">$988</div>
                    </div>
                    <div className="computation__shippingfee">
                    <div className="tag">Shipping Fee </div> <div className="value">$20</div>
                    </div>
                    <div className="computation__coupon">
                    <div className="tag"> Coupon </div><div className="value">None</div>
                    </div>
                    <div className="computation__total">
                    <div className="tag"> Total </div> <div className="value">$118</div>
                    </div>
                    <div className="computation__checkout">
                    <button type="submit" className="checkout_submit">Check out</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )

}

export default CheckoutPage;