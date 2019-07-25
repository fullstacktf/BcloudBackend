import { Db } from "../../domain/Db";
import { Book } from "../../domain/Book";
import { compareSync, hashSync } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
//import UserData from "../models/UserModel";
//import BookData from "../models/BookModel";
import { DbManager } from "../database/DbManager";


export class UserRepository extends Db {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  // async findUser(email_, passw_) {
  //   const user = await UserData.findOne({ email: email_ });
  //   let passwordIsValid = compareSync(passw_, user.passw);
  //
  //   if (passwordIsValid) {
  //     let token = sign({ id: email_ }, "supersecret", {
  //       expiresIn: "12h"
  //     });
  //     return token;
  //   } else return null;
  // }

  // async verifyToken(jwt){
  //   if(jwt) {
  //     const message = await verify(jwt, 'supersecret', async (err, decoded) => {
  //       if (err)
  //         return({message:"Expired token"});
  //       else
  //         return ({token: jwt});
  //     });
  //     return message;
  //   }
  //   else
  //     return ({message:"Unexist token"});
  // }

  // addUser(email_, passw_) {
  //   let cryptpassw = hashSync(passw_, 8);
  //   let book = new Book();
  //   let likes = [];
  //   book.types.forEach(t => {
  //     let d = {
  //       like: t["tipo"],
  //       pond: 1
  //     };
  //     likes.push(d);
  //   });
  //   let data = new UserData({
  //     passw: cryptpassw,
  //     email: email_,
  //     gustos: likes,
  //     librosAdquiridos: [],
  //     nickName: "",
  //     librosFavoritos: []
  //   });
  //   data.save().then(console.log("Ingresado con éxito"));
  // }

  existUser(email) {
    return new Promise((resolve, reject) => {
      email ? this.userModel.findOne({ email }).then(resolve).catch(reject):resolve(undefined);
    });
  }

  // async getBooksUser(email_) {
  //   const dataBookAdquiridos = [];
  //   const dataBookFavoritos = [];
  //   const data = await UserData.findOne({ email: email_ });
  //
  //   for (let l of data.librosAdquiridos) {
  //     const d = await BookData.findOne({ titulo: l });
  //     dataBookAdquiridos.push(d);
  //   }
  //
  //   for (let l of data.librosFavoritos) {
  //     const d = await BookData.findOne({ titulo: l });
  //     dataBookFavoritos.push(d);
  //   }
  //
  //   const books = {
  //     librosAdquiridos: dataBookAdquiridos,
  //     librosFavoritos: dataBookFavoritos
  //   };
  //   return books;
  // }

  // async like(email_, title_) {
  //   const user = await UserData.findOne({ email: email_ });
  //   user.librosFavoritos.push(title_);
  //   user.save();
  // }

  // async dislike(email_, title_) {
  //
  //   const user = await UserData.findOne({ email: email_ });
  //   for (let i = 0; i < user.librosFavoritos.length; i++) {
  //     if (user.librosFavoritos[i] === title_) {
  //       user.librosFavoritos.splice(i, 1);
  //     }
  //   }
  //   user.save();
  // }

  // async getLikesUser(email_) {
  //   const user = await UserData.findOne({ email: email_ });
  //   return user.gustos;
  // }

  // async setLikesUser(email_, likes) {
  //   const user = await UserData.findOne({ email: email_ });
  //   user.gustos = likes;
  //   await user.save();
  //   const newDataUser = await UserData.findOne({ email: email_ });
  //   return newDataUser.gustos;
  // }

  // async getBooksGeners(title_) {
  //   const book = await BookData.findOne({ titulo: title_ });
  //   return book.genero[0];
  // }
}
