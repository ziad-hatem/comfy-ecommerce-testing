import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, Elements, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useUserContext } from "../context/usercontext";
import { formatPrice } from "../reducers/helpers";
import { useHistory } from 'react-router-dom';

const promise = loadStripe("pk_test_51NeSe4IvXLHLMOWMtA3vBg7rbYZCTbhoPncoIOE9S4WgMfgIfEN3nOJ0PTaTN3XQuGbdxLhwf7W4ojgRGsQkXnPp00LgCogGP5")

const CheckoutForm = () => {
    return (<h2>Hello Form Stripe</h2>)
}

const StripeCheckout = () => {
    return (
        <div>
            <Elements stripe={promise}>

            <CheckoutForm />
            </Elements>
        </div>
    )
}

export default StripeCheckout