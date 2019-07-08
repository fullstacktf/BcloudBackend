import { Schema as _Schema, model, connect, set } from "mongoose";

const Schema = _Schema;
var LibreriaSchema = new Schema(
  {
    nombre: String,
    genero: Array,
    autor: String,
    fechaPublicacion: Date,
    descripcion: String,
    valoracion: Number,
    url: String,
    price: Number

  },
  { collection: "BookData" }
);

export const LibroData = model("BookData", LibreriaSchema);
var UserSchema = new Schema(
  {
    gustos: Array,
    email: String,
    passw: String,
    librosAdquiridos: Array,
    nickName: String,
    librosFavoritos: Array
  },
  { collection: "UserData" }
);
export const UserData = model("UserData", UserSchema);

connect("mongodb://localhost:27017/prueba");
set("useFindAndModify", false);
