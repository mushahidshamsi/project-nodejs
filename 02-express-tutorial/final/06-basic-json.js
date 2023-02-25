const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

//IN DETAILS
/*
const express = require("express");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>home page</h1><a href="/api/products">products</a>');
});

app.get("/api/products/:productID", (req, res) => {
  //console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (products) => products.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product not found!");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.json("Hello World!");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
*/
