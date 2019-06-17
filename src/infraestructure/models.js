const Mongoose = require("mongoose");

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


module.exports = {
  LibroData: LibroData,
  UserData: UserData
}