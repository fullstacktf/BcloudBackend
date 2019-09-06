import { Recommender } from "../domain/Recommender";
import {Book } from "../domain/Book";

const book = new Book();

export class BasicRecommender extends Recommender {
  constructor() {
    super();
  }
  compare(a,b){
    if(a.pond < b.pond)
      return 1;
    if(a.pond > b.pond)
     return -1;  
    return 0;
  }
  
  updateLikes(likes,newLike) {
    let types = book.types;

    likes.forEach(like => {
      if(newLike === like['like'])
          like['pond'] += 2;

      types.forEach(type => {
        if(type['tipo'] == like['like']){
          type['similar'].forEach(t =>{
            if(t === newLike)
              like['pond'] +=1;
          })
        }
      })
    });

    likes.sort(this.compare);
    return likes;
  }

  updateLikesNegative(likes,newLike) {
    let types = book.types;

    likes.forEach(like => {
      if(newLike === like['like'])
          like['pond'] -= 2;

      types.forEach(type => {
        if(type['tipo'] == like['like']){
          type['similar'].forEach(t =>{
            if(t === newLike)
              like['pond'] -=1;
          })
        }
      })
    });

    likes.sort(this.compare);
    return likes;
  }

}
