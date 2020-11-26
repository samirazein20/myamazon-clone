import React, {useState} from 'react';
import './Payment.css'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import {CardElement ,useElements, useStripe} from "@stripe/react-stripe-js";

function Payment(){
    const[{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
        //do all fancy stripe stuff

    }

    const handleChange = e => {
        //Listen for changes inside the CardElement
        //Display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }

    return(
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout ( <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>

                {/*payment section -> delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/*payment section -> reviewing items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__item">
                    {/*    all products are going to show here*/}
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />
                        ))}
                    </div>

                </div>
                {/*payment section -> Payment Method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        <div className="payment__details">
                            {/*stripe margic will go here*/}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment