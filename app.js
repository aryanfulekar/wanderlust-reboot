//--------------------------(Require and middleware-start)---------------------------------
const express = require("express");
const mongoose = require("mongoose");

// const methodOverride = require("method-override");
// app.use(methodOverride("_method"))

const app = express();

const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//--------------------------(Require and middleware-end)---------------------------------


//------------------------(MongoDb connection-start)------------------------------

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust-reboot");
}

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

//------------------------(MongoDb connection-end)------------------------------


//------------------------(Express routes-start)------------------------------

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

//------------------------(Express routes-end)------------------------------
