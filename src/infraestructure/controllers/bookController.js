import { DbMongoBook } from "../databases/DbMongoBook";
const dataBase = new DbMongoBook("mongo");
/**
 * aquí se consume la lógica de la base de datos */
export class BookController {
    constructor() {}
  
    async signup(body) {
      const titulo = body.titulo;
      const autor = body.autor;
      const exist = await dataBase.existBook(titulo);
      if (exist) return({ message: "Ya existe este libro" });
      else {
        dataBase.addUser(titulo,autor);
        return ({ message: "Ingresado con exito" });
      }
    }
}