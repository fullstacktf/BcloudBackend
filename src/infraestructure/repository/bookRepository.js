import { Db } from "../../domain/Db";
import UserData from "../models/UserModel";
import BookData from "../models/BookModel";

/**
 * en este archivo se inseeta toda la lógica de la base de datos.
 */
export class BookRepository extends Db {
  async existBook(titulo_) {
    const libro = await BookData.findOne({ titulo: titulo_ });
    if (libro != null) return true;
    else return false;
  }

  async addBook(body,image,epub) {
    console.log(image);
    console.log(body);
    const data = new BookData({
      titulo: body.title,
      genero: body.gener,
      autor: body.author,
      fechaPublicacion: body.publicationDate,
      descripcion: body.description,
      valoracion: body.rating,
      imageUrl: `https://bookcloud.me/images/${image}`,
      ebookUrl: `https://bookcloud.me/epub/${epub}`,
      price: body.price
    });
    
    data.save();
  }
}
