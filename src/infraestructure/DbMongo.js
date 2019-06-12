const {Db} = require('../domain/Db');
const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Schema = Mongoose.Schema;
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

Mongoose.connect("mongodb://localhost:27017/prueba");
Mongoose.set("useFindAndModify", false);


class DBMongo extends Db{
  constructor(){
    super();
  }
  addUser(user, passw){

  }

  findUser(){
      //let passwordIsValid = bcrypt.compareSync(req.body.pass, user.password);
  }
}