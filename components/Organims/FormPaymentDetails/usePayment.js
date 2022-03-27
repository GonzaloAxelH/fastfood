import { loadStripe } from "@stripe/stripe-js";
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);
import axios from "axios";
import { useState } from "react";

export const usePayment = ({ item }) => {
  const [result, setResult] = useState(null);
  async function createCheckOutSession() {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: item,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    setResult(result);
  }

  return { result, createCheckOutSession };
};
