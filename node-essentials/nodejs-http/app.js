const express = require("express");

const app = express();
const port = 3000;

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
  ];

  res.json(products);
});

app.listen(port, () => console.log("server is running on port", port));
