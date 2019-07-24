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

    async uploadBook (body,files){
      if (Object.keys(files).length == 0) {
        return res.status(400).send("No files were uploaded.");
      }

      
      let epubFile = files.epubFile;
      let imageFile = files.imageFile;

      dataBase.addBook(body,imageFile.name,epubFile.name);

      epubFile.mv(`/data/epub/${epubFile.name}`, function(err) {
        if (err) return res.status(500).send(err);
      });
    
      imageFile.mv(`/data/images/${imageFile.name}`, function(err) {
        if (err) return res.status(500).send(err);
      });
    return("File uploaded!");
    }
}