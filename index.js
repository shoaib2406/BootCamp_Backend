const express = require('express');
const app = express();

const user = require('./Controllers/UserController')

var router = require("express").Router();

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/TEST_DATABASE')
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });

app.use("/", router);

router.post('/deleteUser',(request,response) => {
  console.log("req", request.body)
  //user.createUser(request.body)
 // user.updateUser(request.body)
  user.deleteUser(request.body)
  response.send("SUCCESS")
});

app.listen(8080, ()=>{
  console.log("Listening to port 8080")
})