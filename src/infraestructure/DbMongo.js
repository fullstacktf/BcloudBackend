const { Db } = require("../domain/Db");
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

const LibroData = Mongoose.model("Libreria", LibreriaSchema);
var UserSchema = new Schema(
  {
    gustos: Array,
    email: String,
    passw: String
  },
  { collection: "UserData" }
);
const UserData = Mongoose.model("UserData", UserSchema);

Mongoose.connect("mongodb://localhost:27017/prueba");
Mongoose.set("useFindAndModify", false);

class DbMongo extends Db {
  constructor(name) {
    super();
    this.name = name
  }

  findUser(email_, passw_) {
    //let passwordIsValid = bcrypt.compareSync(req.body.pass, user.password);
  }

  addUser(email_, passw_) {
    let cryptpassw = bcrypt.hashSync(passw_, 8);
    let data = new UserData({
      passw: cryptpassw,
      email: email_,
      gustos: []
    });
    data.save().then(console.log("Ingresado con éxito"));
  }
}

module.exports = DbMongo;
