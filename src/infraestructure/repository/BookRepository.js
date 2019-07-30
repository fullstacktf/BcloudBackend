import { Db } from "../../domain/Db";
import BookData from "../models/BookModel";
import { Helper } from "./Helper";


export class BookRepository extends Db {
  async existBook(titulo) {
    Helper.connectDatabase();
    const libro = await BookData.findOne({ titulo });
    if (libro != null) return true;
    else return false;
  }

  async existTag(tag) {
    Helper.connectDatabase();
    const libro = await BookData.findOne({ tag });
    if (libro != null) return true;
    else return false;
  }

  async addBook(body) {
    Helper.connectDatabase();
    let urls = Helper.tagged(body.title);
    const data = new BookData({
      titulo: body.title,
      genero: body.gener.split(','),
      autor: body.author,
      fechaPublicacion: body.publicationDate,
      descripcion: body.description,
      valoracion: body.rating,
      imageUrl: `https://bookcloud.me/images/${urls}.jpg`,
      ebookUrl: `https://bookcloud.me/epub/${urls}.epub`,
      price: body.price
    });
    data.save();
    return urls;
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
