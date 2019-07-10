import { Dbfake } from "../src/infraestructure/databases/Dbfake";
import { BasicRecommender } from '../src/application/BasicRecommender';
import { Book } from '../src/domain/Book';

let book = new Book();
const db = new Dbfake();
let recommender = new BasicRecommender();

describe("Testing our data bases", () => {
  it("Adding a new user", () => {

    expect(db.addUser("sergio@gmail.com","sergiopassword")).toEqual({email:"sergio@gmail.com",passw:"sergiopassword",gustos:{}});
  });
});

describe("Testing our Recommender", () => {
  it("Updating likes from user", () => {
    const likes = [{like:'Thiller',pond: 1.0},{like:'Aventura',pond:1.0},{like:'Terror',pond:1.0}];
    const newLike = ['Thiller'];
    expect(recommender.updateLikes(likes,book,newLike)).toEqual([{like:'Thiller',pond: 3.0},{like:'Terror',pond:1.5},{like:'Aventura',pond:1.0}]);
  });
});
