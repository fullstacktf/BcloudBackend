import { UserRepository } from "../repository/userRepository";
import { BasicRecommender } from "../../application/BasicRecommender";
const userRepository = new UserRepository();
const recommender = new BasicRecommender();

export class UserController {
  constructor() {}

  async signup(body) {
    const email = body.email;
    const passw = body.passw;
    const exist = await userRepository.existUser(email);
    if (exist) return({ message: "Ya existe este user" });
    else {
      userRepository.addUser(email,passw);
      return ({ message: "Ingresado con exito" });
    }
  }

  async login(body){
    const token = await userRepository.findUser(body.email,body.passw);
    if(token != null)
      return({ token: token })
    else 
      return({message:"Error en el login. Email o contraseña no valida"})
  }

  async verifyToken(body){
    const response = await userRepository.verifyToken(body.jwt);
    return response;
  }

  async getBooks(body){
    const books = await userRepository.getBooksUser(body.email);
    return books;
  }

  async like(body){
    await userRepository.like(body.email,body.title); 
    const oldLikes = await userRepository.getLikesUser(body.email);
    const gener = await userRepository.getBooksGeners(body.title);
    const newLikes = recommender.updateLikes(oldLikes,gener);
    const newData = await userRepository.setLikesUser(body.email,newLikes);
    return newData;
  }

  async dislike(body){
    await userRepository.dislike(body.email,body.title);
    const oldLikes = await userRepository.getLikesUser(body.email);
    const gener = await userRepository.getBooksGeners(body.title);
    const newLikes = recommender.updateLikesNegative(oldLikes,gener);
    const newData = await userRepository.setLikesUser(body.email,newLikes);
    return newData;
  }

}
