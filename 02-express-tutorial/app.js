const express = require("express");
const app = express();
const authorize = require("./authorize");
const logger = require("./logger.js");

// app.use('/api', logger) now it would only apply to this path
// app.use(logger, authorize);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", [logger, authorize], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
