import { BookRepository } from "../../repository/BookRepository";
const dataBase = new BookRepository();

export class BookUload {
  constructor() { }
  
  static async uploadBook(body, files) {
    if (Object.keys(files).length == 0) {
      return res.status(400).send("No files were uploaded.");
    }

    let epubFile = files.epubFile;
    let imageFile = files.imageFile;

    dataBase.addBook(body, imageFile.name, epubFile.name);

    epubFile.mv(`/data/epub/${epubFile.name}`, (err) => {
      if (err) return res.status(500).send(err);
    });

    imageFile.mv(`/data/images/${imageFile.name}`, (err) => {
      if (err) return res.status(500).send(err);
    });
    return "File uploaded!";
  }
}
