import { DbMongo } from "../databases/DbMongo";
import { BasicRecommender } from "../../application/BasicRecommender";
const dataBase = new DbMongo("mongo");
const recommender = new BasicRecommender();

export class UserController {
  constructor() {}

  async signup(body) {
    const email = body.email;
    const passw = body.passw;
    const exist = await dataBase.existUser(email);
    if (exist) return({ message: "Ya existe este user" });
    else {
      dataBase.addUser(email,passw);
      return ({ message: "Ingresado con exito" });
    }
  }

  async login(body){
    const email = body.email;
    const passw = body.passw;
    const token = await dataBase.findUser(email,passw);
    console.log(token);
    if(token != null)
      return({ token: token })
    else 
      return({message:"Error en el login. Email o contraseña no valida"})
  }

  async getBooks(body){
    const books = await dataBase.getBooksUser(body.email);
    return books;
  }

  async like(body){
    await dataBase.like(body.email,body.title); 
    const oldLikes = await dataBase.getLikesUser(body.email);
    const gener = await dataBase.getBooksGeners(body.title);
    const newLikes = recommender.updateLikes(oldLikes,gener);
    const newData = await dataBase.setLikesUser(body.email,newLikes);
    return newData;
  }

  async dislike(body){
    await dataBase.dislike(body.email,body.title);
    const oldLikes = await dataBase.getLikesUser(body.email);
    const gener = await dataBase.getBooksGeners(body.title);
    const newLikes = recommender.updateLikesNegative(oldLikes,gener);
    const newData = await dataBase.setLikesUser(body.email,newLikes);
    return newData;
  }

}
