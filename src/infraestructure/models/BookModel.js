import mongoose from "mongoose";


const LibreriaSchema = mongoose.Schema(
  {
    titulo: String,
    genero: Array,
    autor: String,
    fechaPublicacion: String,
    descripcion: String,
    valoracion: Number,
    imageUrl: String,
    ebookUrl: String,
    price: Number

  },
  { collection: "BookData" }
);

//export default mongoose.model("BookData", LibreriaSchema);
