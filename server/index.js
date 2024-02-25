const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const stripe = require("stripe")(
  "sk_test_51Omv38SDApL2Y6yKhN3hdHV1czEb7dc810xxaVX8HeqjBcd7PSksKVgBZuTaOWkZzSPnBiCoXfRQUyiW8mB4dOnY009RSo9M0O"
);

//checkout api
app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("Server Started By Me");
  console.log("and it is working on Pagasus machine");
});
