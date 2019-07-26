import mongoose from "mongoose";

const LibreriaSchema = mongoose.Schema(
  {
    titulo: String,
    autor: String,
    genero: Array,
    fechaPublicacion: String,
    descripcion: String,
    valoracion: Number,
    imageUrl: String,
    ebookUrl: String,
    price: Number,
    tag: String
  },
  { collection: "BookData" }
);

export default mongoose.model("BookData", LibreriaSchema);
