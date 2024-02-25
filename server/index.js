const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

//checkout api

app.post("/api/create-checkout-session", async (req, res) => {
  console.log("Post method executed");
  console.log("Received req from client:", req);
  console.log("Received res from client:", res);

  const product = req.body;
  console.log(product);
});

app.listen(7000, () => {
  console.log("Server Started By Me");
  console.log("and it is working on Pagasus machine");
});
