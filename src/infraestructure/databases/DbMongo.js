import {Db} from '../../domain/Db';
import {Book} from '../../domain/Book'
import { compareSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import UserData from "../models/UserModel";
import BookData from "../models/BookModel";

export class DbMongo extends Db{
  
  constructor(name) {
    super();
    this.name = name
  }

  async findUser(email_, passw_) {
    const user = await UserData.findOne({ email: email_ });
    let passwordIsValid = compareSync(passw_, user.passw);

    if (passwordIsValid) {
      let token = sign({ id: email_ }, "supersecret", {
        expiresIn: 10000
      });
      return token;
    } 
    else
        return null;
  }

  
  addUser(email_, passw_) {
    let cryptpassw = hashSync(passw_, 8);
    let book = new Book();
    let likes = [];
    book.types.forEach(t =>{
      let d = {
        like:t['tipo'],
        pond: 1
      }
      likes.push(d);
    })
    let data = new UserData({
      passw: cryptpassw,
      email: email_,
      gustos: likes,
      librosAdquiridos:[],
      nickName:"",
      librosFavoritos:[]
    });
    data.save().then(console.log("Ingresado con éxito"));
  }


  async existUser(email_){
    const user = await UserData.findOne({ email: email_ });
    if(user != null )
      return true;
    else 
      return false;
  }

  async getBooksUser(email_){
    
    const dataBookAdquiridos = [];
    const dataBookFavoritos = [];
    const data = await UserData.findOne({email:email_});
    
    for(let l of data.librosAdquiridos){
      const d = await BookData.findOne({titulo: l});
      dataBookAdquiridos.push(d);
    };

    for(let l of data.librosFavoritos){
      const d = await BookData.findOne({titulo: l});
      dataBookFavoritos.push(d);
    };

    const books = {
        librosAdquiridos: dataBookAdquiridos,
        librosFavoritos: dataBookFavoritos
    }
    return books;
  }

  async like(email_,title_){
    const user = await UserData.findOne({email:email_});
    user.librosFavoritos.push(title_);
    user.save();
  }

  async getLikesUser(email_){
    const user = await UserData.findOne({email:email_});
    return user.gustos;
  }

  async setLikesUser(email_,likes){
    const user = await UserData.findOne({email:email_});
    user.gustos = likes;
    await user.save();
    const newDataUser = await UserData.findOne({email:email_});
    return newDataUser.gustos;
  }

  async getBooksGeners(title_){
    const book = await BookData.findOne({titulo: title_});
    return book.genero[0];
  }




}
