import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  const { total } = data;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(total) * 100,
      currency: "USD",
    });
    res.status(200).json(paymentIntent.client_secret);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
