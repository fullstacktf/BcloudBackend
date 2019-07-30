import { BookRepository } from "../../repository/BookRepository";
const dataBase = new BookRepository();

export class BookUpload {
  constructor() { }
  
  static async uploadBook(body, files) {
    if (Object.keys(files).length == 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const urls = await dataBase.addBook(body);

    let epubFile = files.epubFile;
    let imageFile = files.imageFile;

    epubFile.mv(`/data/epub/${urls}.epub`, (err) => {
      if (err) return res.status(500).send(err);
    });

    imageFile.mv(`/data/images/${urls}.jpg`, (err) => {
      if (err) return res.status(500).send(err);
    });
    return "File uploaded!";
  }
}
