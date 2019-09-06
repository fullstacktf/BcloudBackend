import { UserRepository } from "../../repository/UserRepository";
import { BasicRecommender } from "../../../application/BasicRecommender";
const userRepository = new UserRepository();
const recommender = new BasicRecommender();

export class UserLikes {
  constructor(){}

  static async like(body){
    await userRepository.like(body.email,body.title); 
    const oldLikes = await userRepository.getLikesUser(body.email);
    const geners = await userRepository.getBooksGeners(body.title);
    for(let gener of geners) {
      const newLikes = recommender.updateLikes(oldLikes,gener);
      await userRepository.setLikesUser(body.email,newLikes);
    };
    const likes = await userRepository.getLikesUser(body.email);
    return likes;
  }

  static async dislike(body){
    await userRepository.dislike(body.email,body.title); 
    const oldLikes = await userRepository.getLikesUser(body.email);
    const geners = await userRepository.getBooksGeners(body.title);
    for(let gener of geners) {
      const newLikes = recommender.updateLikesNegative(oldLikes,gener);
      await userRepository.setLikesUser(body.email,newLikes);
    };
    const likes = await userRepository.getLikesUser(body.email);
    return likes;
  }

  static async getLikes(body){
    const likes = await userRepository.getLikesUser(body.email);
    return likes;
  }
  
  static async buyBook(body){
    const response = await userRepository.buyBook(body.email, body.title);
    return response;
  }
}