import { UserRepository } from "../../repository/UserRepository";
import { BasicRecommender } from "../../../application/BasicRecommender";
const recommender = new BasicRecommender();
const userRepository = new UserRepository();

export class UserCRUD {
  constructor() {}

  static async signup(body) {
    const exist = await userRepository.existUser(body.email);
    if (exist) return({ message: "Ya existe este user" });
    else {
      await userRepository.addUser(body);
      const oldLikes = await userRepository.getLikesUser(body.email);
      const geners = body.likes.split(',');
      for(let gener of geners) {
        const newLikes = recommender.updateLikes(oldLikes,gener);
        await userRepository.setLikesUser(body.email,newLikes);
      };
      return ({ message: "Ingresado con exito" });
    }
  }

  static async login(body){
    const token = await userRepository.findUser(body.email,body.passw);
    if(token != null)
      return({ token: token })
    else 
      return({message:"Error en el login. Email o contraseña no validos"})
  }

  static async verifyToken(body){
    const response = await userRepository.verifyToken(body.jwt);
    return response;
  }

  static async getBooks(body){
    const books = await userRepository.getBooksUser(body.email);
    return books;
  }
}