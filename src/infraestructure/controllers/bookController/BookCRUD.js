import { BookRepository } from "../../repository/bookRepository";
const dataBase = new BookRepository();

export class BookCRUD {
  static async signup(body) {
    const titulo = body.titulo;
    const autor = body.autor;
    const exist = await dataBase.existBook(titulo);
    if (exist) return { message: "Ya existe este libro" };
    else {
      dataBase.addBookManu(body);
      return { message: "Ingresado con exito" };
    }
  }
  static async getBook(body, tag) {
    const exist = await dataBase.existTag(tag);
    if (exist) return dataBase.getBook(tag).then(data => data);
    else {
      return { message: "No existe el libro que busca" };
    }
  }
  static async getAllBooks() {
    return dataBase.getAllBooks().then(data => data);
  }

  static async delete(body, paramTitulo) {
    const exist = await dataBase.getInstance().existTag(body.tag);
    if (exist) {
      dataBase.delete(paramTitulo);
      return { message: "Borrado con exito" };
    } else {
      return { message: "No existe este libro" };
    }
  }
}
