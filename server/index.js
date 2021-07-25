const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Hello there.");
});

app.listen(3001, () => console.log("Server running on port 3001."));
