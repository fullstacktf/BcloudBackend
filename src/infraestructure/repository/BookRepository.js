import { Db } from "../../domain/Db";
import UserData from "../models/UserModel";
import BookData from "../models/BookModel";
import { Helper } from "./Helper";


export class BookRepository extends Db {
  async existBook(titulo_) {
    Helper.connectDatabase();
    const libro = await BookData.findOne({ titulo: titulo_ });
    if (libro != null) return true;
    else return false;
  }
  async existTag(tag_) {
    Helper.connectDatabase();
    const libro = await BookData.findOne({ tag: tag_ });
    if (libro != null) return true;
    else return false;
  }

  async addBook(body, image, epub) {
    Helper.connectDatabase();
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
  async getBook(tag_) {
    Helper.connectDatabase();
    const libro = await BookData.findOne({ tag: tag_ });
    return libro;
  }
  async getAllBooks() {
    Helper.connectDatabase();
    const libro = await BookData.find({});
    return libro;
  }
  async addBookManu(body) {
    Helper.connectDatabase();
    const str = Helper.tagged(body.titulo);
    const data = new BookData({
      titulo: body.titulo,
      autor: body.autor,
      tag: str
    });
    data.save();
  }
  async delete(paramTag) {
    Helper.connectDatabase();
    BookData.deleteOne({ tag: paramTag });
  }
}
