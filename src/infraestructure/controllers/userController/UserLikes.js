import { UserRepository } from "../../repository/UserRepository";
import { BasicRecommender } from "../../../application/BasicRecommender";
const userRepository = new UserRepository();
const recommender = new BasicRecommender();

export class UserLikes {
  constructor(){}

  static async like(body){
    await userRepository.like(body.email,body.title); 
    const oldLikes = await userRepository.getLikesUser(body.email);
    const gener = await userRepository.getBooksGeners(body.title);
    const newLikes = recommender.updateLikes(oldLikes,gener);
    const newData = await userRepository.setLikesUser(body.email,newLikes);
    return newData;
  }

  static async dislike(body){
    await userRepository.dislike(body.email,body.title);
    const oldLikes = await userRepository.getLikesUser(body.email);
    const gener = await userRepository.getBooksGeners(body.title);
    const newLikes = recommender.updateLikesNegative(oldLikes,gener);
    const newData = await userRepository.setLikesUser(body.email,newLikes);
    return newData;
  }
}