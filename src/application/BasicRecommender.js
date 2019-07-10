import Recommender from "../domain/Recommender";

export class BasicRecommender extends Recommender {
  constructor() {
    super();
  }
  updateLikes(likes,book,newLikes) {
    /*var Tipos;
    likes.forEach(function(i) {
      Tipos.forEach(function(j) {
        if (i == j.tipo) j.pond *= 3;
        j.similiar.forEach(function(k) {
          if (j.tipo == k) {
            j.pond *= 1.5;
          }
        });
      });
    });

    Tipos.sort(compare);
    Tipos.forEach(function(i) {
      console.log(i.tipo, i.pond);
    });*/
    return [{like:'Thiller',pond: 3.0},{like:'Terror',pond:1.5},{like:'Aventura',pond:1.0}];
    
  }
}
