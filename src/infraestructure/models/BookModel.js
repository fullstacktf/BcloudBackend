import mongoose from "mongoose";


const LibreriaSchema = mongoose.Schema(
  {
    titulo: String,
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

export default mongoose.model("BookData", LibreriaSchema);