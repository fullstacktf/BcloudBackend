var express = require("express");
var bodyParse = require("body-parser");
var cors = require("cors");
var Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Mongoose.connect("mongodb://localhost:27017/prueba");

Mongoose.set("useFindAndModify", false);
var app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
//control de acceso (CORS)
app.use(cors());

var Schema = Mongoose.Schema;

app.listen(process.env.PORT || 8081, function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Escuchando en el Puerto 8081");
});

var LibreriaSchema = new Schema(
  {
    name: String,
    tipo: Array
  },
  { collection: "Libreria" }
);

var LibroData = Mongoose.model("Libreria", LibreriaSchema);

var UserSchema = new Schema(
  {
    gustos: Array,
    email: String,
    passw: String
  },
  { collection: "UserData" }
);

var UserData = Mongoose.model("UserData", UserSchema);

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

app.post("/login", (req, res) => {
  console.log(req.body);

  //let passwordIsValid = bcrypt.compareSync(req.body.pass, user.password);
  let token = jwt.sign({ id: req.body.email }, "supersecret", {
    expiresIn: 10
  });

  res.send({ token: token });
});

app.post("/signup", (req, res) => {
  let password = bcrypt.hashSync(req.body.passw, 8);

  let data = new UserData({
    passw: password,
    email: req.body.email,
    gustos: []
  });

  data.save().then(console.log("Ingresado con éxito"));

  res.send('../../inicio.html');
});
