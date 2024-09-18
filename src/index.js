const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Port = 8000;
const imageRoute = require("../src/route/imgUpload")
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api" , imageRoute);

const createAndStartServer = () => {
  app.listen(Port, () => {
    console.log(`Server is running on Port ${Port}`);
  });
};

createAndStartServer();
