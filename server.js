//imports
const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();

//sets port
const port = process.env.PORT || 5000;

//builds static directory
app.use(express.static("public"));

//shows api
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./api/restaurants.json"));
});
app.get("/gitpinlocations", (req, res)=>{
  res.sendFile(path.resolve("./api/location.json"))
})

//shows what port we are viewing on in terminal
app.listen(port, () => {
  console.log("listening on port:", port);
});
