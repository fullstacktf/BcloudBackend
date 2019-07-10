import { Dbfake } from "../src/infraestructure/databases/Dbfake";
import { BasicRecommender } from '../src/application/BasicRecommender';
import { Book } from '../src/domain/Book';

let book = new Book();
const db = new Dbfake();
let recommender = new BasicRecommender();
let likes = [];
book.types.forEach(t =>{
      let d = {
        like:t['tipo'],
        pond: 1
      }
      likes.push(d);
  })

describe("Testing our data bases", () => {
  it("Adding a new user", () => {

    expect(db.addUser("sergio@gmail.com","sergiopassword")).toEqual({email:"sergio@gmail.com",passw:"sergiopassword",gustos:{}});
  });
});

describe("Testing our Recommender", () => {
  it("Updating likes from user", () => {
    const newLike = 'Thriller';
    const returned = [{"like": "Thriller", "pond": 3}, 
    {"like": "Terror", "pond": 2}, 
    {"like": "Ficción", "pond": 2}, 
    {"like": "Romántica", "pond": 1}, 
    {"like": "Viajes", "pond": 1}, {"like": "Investigación", "pond": 1}, 
    {"like": "Biografía", "pond": 1}, {"like": "Aventura", "pond": 1}, 
    {"like": "Autoayuda", "pond": 1}, {"like": "Erótica", "pond": 1}, 
    {"like": "Hogar", "pond": 1}, {"like": "Enciclopedia", "pond": 1}, 
    {"like": "Política", "pond": 1}, {"like": "Sociedad", "pond": 1}, 
    {"like": "Infantil", "pond": 1}];

    expect(recommender.updateLikes(likes,book,newLike)).toEqual(returned);
  });
});


