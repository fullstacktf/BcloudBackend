import {Db} from '../../domain/Db';
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
    let data = new UserData({
      passw: cryptpassw,
      email: email_,
      gustos: [],
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
    else return false;
  }
}
