const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());

const DbMongo = require("../src/infraestructure/DbMongo");
const DataBase = new DbMongo("mongo");

app.listen(process.env.PORT || 8081, err => {
  if (err) {
    console.log(err);
  }
  console.log("Escuchando en el Puerto 8081");
});

app.post("/", (req, res) => {
  res.status(200).send("Bienvenido a Bcloud");
});

app.post("/login", async (req, res) => {
  const token = await DataBase.findUser(req.body.email,req.body.passw);
  res.send({ token });
});

app.post("/signup", async (req, res) => {
  const exist = await DataBase.existUser(req.body.email);
  if(exist)
    res.send("Email ya usado");
  else{
    DataBase.addUser(req.body.email, req.body.passw);
    res.send(200);
  }
});
