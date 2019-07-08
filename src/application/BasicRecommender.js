const Recommender = require("../domain/Recommender");

class BasicRecommender extends Recommender {
  constructor() {
    super();
  }
  updateLikes(likes,book,newLikes) {
    var Tipos;
    var gustosUser = ["Thriller", "Aventura"];

    gustosUser.forEach(function(i) {
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
    });
    
  }
}

module.exports = BasicRecommender;