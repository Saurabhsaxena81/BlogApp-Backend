const express = require("express");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());

const blog = require("./routes/blog");

//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1> This is my home page</h1>`);
});
