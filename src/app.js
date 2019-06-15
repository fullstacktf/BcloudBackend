const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());

const DbMongo = require("../src/infraestructure/DbMongo");
const DataBase = new DbMongo("mongo");

app.listen(process.env.PORT || 8081, function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Escuchando en el Puerto 8081");
});

app.post("/", (req, res) => {
  var Tipos = [
    { tipo: "Thriller", pond: 1.0, similiar: ["Romantica"] },
    { tipo: "Aventura", pond: 1.0, similiar: ["Romantica"] },
    { tipo: "Romantica", pond: 1.0, similiar: ["Romantica"] }
  ];

  var gustosUser = ["Thriller", "Aventura"];

  gustosUser.forEach(function(i) {
    Tipos.forEach(function(j) {
      if (i == j.tipo) j.pond *= 3;
      j.similiar.forEach(function(k) {
        if (j.tipo == k) {
          j.pond *= 1.5;
        }
      });
    });
  });

  Tipos.sort(compare);
  Tipos.forEach(function(i) {
    console.log(i.tipo, i.pond);
  });

  res.send(Tipos);

  /*
  var data = new LibroData({
      name: "El quijotee",
      tipo: ["Ficción","Aventura"]
  });

  var data1 = new UserData({
      name: "Sergio",
      gustos: ["Ficción","Aventura"]
  });

  data.save();
  data1.save();*/
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
