import { Db } from "../../domain/Db";
import { Book } from "../../domain/Book";
import { compareSync, hashSync } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import UserData from "../models/UserModel";
import BookData from "../models/BookModel";
import { Helper } from '../repository/Helper';

export class UserRepository extends Db {
  constructor(name) {
    super();
    this.name = name;
  }

  async findUser(email, passw) {
    Helper.connectDatabase();
    const user = await UserData.findOne({ email });
    if(user == null)
      return null;
    let passwordIsValid = compareSync(passw, user.passw);

    if (passwordIsValid) {
      let token = sign({ id: email }, "supersecret", {
        expiresIn: "12h"
      });
      return token;
    } else return null;
  }

  async verifyToken(jwt){
    if(jwt) {
      const message = await verify(jwt, 'supersecret', async (err) => {
        if (err)
          return({message:"Expired token"});
        else
          return ({token: jwt});
      });
      return message;
    }
    else
      return ({message:"Unexist token"});
  }

  async addUser(body) {
    Helper.connectDatabase();
    let cryptpassw = hashSync(body.passw, 8);
    let book = new Book();
    let init = [];
    book.types.forEach(t => {
      let d = {
        like: t["tipo"],
        pond: 1
      };
      init.push(d);
    });


    let data = new UserData({
      passw: cryptpassw,
      email: body.email,
      gustos: init,
      librosAdquiridos: [],
      nickName: body.name,
      librosFavoritos: []
    });
    await data.save();
    console.log("ingresado con exito");
  }

  async existUser(email) {
    Helper.connectDatabase();
    const user = await UserData.findOne({ email });
    if (user != null) return true;
    else return false;
  }

  async getBooksUser(email) {
    Helper.connectDatabase();
    const dataBookAdquiridos = [];
    const dataBookFavoritos = [];
    const data = await UserData.findOne({ email });

    for (let l of data.librosAdquiridos) {
      const d = await BookData.findOne({ titulo: l });
      dataBookAdquiridos.push(d);
    }

    for (let l of data.librosFavoritos) {
      const d = await BookData.findOne({ titulo: l });
      dataBookFavoritos.push(d);
    }

    const books = {
      librosAdquiridos: dataBookAdquiridos,
      librosFavoritos: dataBookFavoritos
    };
    return books;
  }

  async like(email, title) {
    Helper.connectDatabase();
    const user = await UserData.findOne({ email });
    user.librosFavoritos.push(title);
    user.save();
  }

  async dislike(email, title) {
    Helper.connectDatabase();
    const user = await UserData.findOne({ email});
    for (let i = 0; i < user.librosFavoritos.length; i++) {
      if (user.librosFavoritos[i] === title) {
        user.librosFavoritos.splice(i, 1);
      }
    }
    user.save();
  }

  async getLikesUser(email) {
    Helper.connectDatabase();
    const user = await UserData.findOne({ email });
    return user.gustos;
  }

  async setLikesUser(email, likes) {
    Helper.connectDatabase();
    const user = await UserData.findOne({ email });
    user.gustos = likes;
    await user.save();
    const newDataUser = await UserData.findOne({ email });
    return newDataUser.gustos;
  }

  async getBooksGeners(title) {
    Helper.connectDatabase();
    const book = await BookData.findOne({ titulo: title });
    return book.genero;
  }

  async buyBook(email, book){
    Helper.connectDatabase();
    const user = await UserData.findOne({ email });
    user.librosAdquiridos.push(book);
    user.save();
    return { message: "Comprado con éxito" };
  }
}
