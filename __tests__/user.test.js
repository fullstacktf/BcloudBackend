import { BasicRecommender } from '../src/application/BasicRecommender';
import { Book } from '../src/domain/Book';
import { Helper } from '../src/infraestructure/repository/Helper'
let book = new Book();
let recommender = new BasicRecommender();


let likes = [];
beforeEach(() =>{
  book.types.forEach(t =>{
        let d = {
          like:t['tipo'],
          pond: 1
        }
        likes.push(d);
    })
    return likes;
  })

describe("Testing our Recommender", () => {
  test("Updating likes from user", () => {
    const newLike = 'Thriller';
    const returned = [ { like: 'Thriller', pond: 3 },
    { like: 'Terror', pond: 2 },
    { like: 'Ficción', pond: 2 },
    { like: 'Romántica', pond: 1 },
    { like: 'Viajes', pond: 1 },
    { like: 'Investigación', pond: 1 },
    { like: 'Biografía', pond: 1 },
    { like: 'Aventura', pond: 1 },
    { like: 'Autoayuda', pond: 1 },
    { like: 'Erótica', pond: 1 },
    { like: 'Hogar', pond: 1 },
    { like: 'Enciclopedia', pond: 1 },
    { like: 'Política', pond: 1 },
    { like: 'Sociedad', pond: 1 },
    { like: 'Infantil', pond: 1 } ];
    expect(recommender.updateLikes(likes,newLike)).toEqual(returned);
  });
});

describe("Testing tagged urls for the book", () => {
  test("Pass the book title and create the tag", () => {
    expect(Helper.tagged("El Quijote")).toEqual("el-quijote");
  })
})

describe("Testing delete duplicate books recommended by diferents geners", () => {
  test("Pass the array with duplicate books and empty data and return the clean array", () => {
    let dirtyArray = [ [ { genero: [Array],
      _id: '5d3ec17e2c665038be0c0fe7',
      titulo: 'El chico de los ojos verdes',
      autor: 'hfg',
      fechaPublicacion: '2019-07-10',
      descripcion: 'retgretfgretghret',
      valoracion: 14,
      imageUrl: 'https://bookcloud.me/images/portada3.jpg',
      ebookUrl: 'https://bookcloud.me/epub/portada3.jpg',
      price: 123,
      __v: 0 },
    { genero: [Array],
      _id: '5d3ec20b2c665038be0c0fea',
      titulo: 'La profecía del cuervo',
      autor: 'hrth',
      fechaPublicacion: '2019-07-12',
      descripcion:
       'fskdlgnjkldefgregrwethrwthrwetjkgreiofgjhorweiqjhiofgreojhghuiorehg',
      valoracion: 10,
      imageUrl: 'https://bookcloud.me/images/portada7.jpg',
      ebookUrl: 'https://bookcloud.me/epub/portada7.jpg',
      price: 12,
      __v: 0 },
    { genero: [Array],
      _id: '5d3ec2232c665038be0c0feb',
      titulo: 'the dreams thieves',
      autor: 'hrth',
      fechaPublicacion: '2019-07-12',
      descripcion:
       'fskdlgnjkldefgregrwethrwthrwetjkgreiofgjhorweiqjhiofgreojhghuiorehg',
      valoracion: 10,
      imageUrl: 'https://bookcloud.me/images/portada8.jpg',
      ebookUrl: 'https://bookcloud.me/epub/portada8.jpg',
      price: 12,
      __v: 0 },
    { genero: [Array],
      _id: '5d416224a1a4c23cec9fc9b7',
      titulo: 'Love',
      autor: 'sergio',
      fechaPublicacion: '2019-07-04',
      descripcion: 'ghmghmtghdm',
      valoracion: 10,
      imageUrl: 'https://bookcloud.me/images/love.jpg',
      ebookUrl: 'https://bookcloud.me/epub/love.epub',
      price: 10,
      __v: 0 } ],
  [],
  [ { genero: [Array],
      _id: '5d3ec1482c665038be0c0fe6',
      titulo: 'Princesa de Cenizas',
      autor: 'fghb',
      fechaPublicacion: '2019-07-04',
      descripcion: 'gfgrefdg',
      valoracion: 10,
      imageUrl: 'https://bookcloud.me/images/portada1.jpg',
      ebookUrl: 'https://bookcloud.me/epub/a.epub',
      price: 12,
      __v: 0 },
    { genero: [Array],
      _id: '5d3ec1e92c665038be0c0fe9',
      titulo: 'Te lo advertí',
      autor: 'bgrbhn',
      fechaPublicacion: '2019-07-16',
      descripcion: 'bnrghnbrfgen',
      valoracion: 10,
      imageUrl: 'https://bookcloud.me/images/portada5.jpg',
      ebookUrl: 'https://bookcloud.me/epub/portada5.jpg',
      price: 11,
      __v: 0 } ],
  [ { genero: [Array],
      _id: '5d3ec1482c665038be0c0fe6',
      titulo: 'Princesa de Cenizas',
      autor: 'fghb',
      fechaPublicacion: '2019-07-04',
      descripcion: 'gfgrefdg',
      valoracion: 10,
      imageUrl: 'https://bookcloud.me/images/portada1.jpg',
      ebookUrl: 'https://bookcloud.me/epub/a.epub',
      price: 12,
      __v: 0 } ] ]
    let cleanArray = [
      {"__v": 0, "_id": "5d3ec17e2c665038be0c0fe7", "autor": "hfg", "descripcion": "retgretfgretghret", "ebookUrl": "https://bookcloud.me/epub/portada3.jpg", "fechaPublicacion": "2019-07-10", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada3.jpg", "price": 123, "titulo": "El chico de los ojos verdes", "valoracion": 14}, {"__v": 0, "_id": "5d3ec20b2c665038be0c0fea", "autor": "hrth", "descripcion": "fskdlgnjkldefgregrwethrwthrwetjkgreiofgjhorweiqjhiofgreojhghuiorehg", "ebookUrl": "https://bookcloud.me/epub/portada7.jpg", "fechaPublicacion": "2019-07-12", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada7.jpg", "price": 12, "titulo": "La profecía del cuervo", "valoracion": 10}, {"__v": 0, "_id": "5d3ec2232c665038be0c0feb", "autor": "hrth", "descripcion": "fskdlgnjkldefgregrwethrwthrwetjkgreiofgjhorweiqjhiofgreojhghuiorehg", "ebookUrl": "https://bookcloud.me/epub/portada8.jpg", "fechaPublicacion": "2019-07-12", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada8.jpg", "price": 12, "titulo": "the dreams thieves", "valoracion": 10}, {"__v": 0, "_id": "5d416224a1a4c23cec9fc9b7", "autor": "sergio", "descripcion": "ghmghmtghdm", "ebookUrl": "https://bookcloud.me/epub/love.epub", "fechaPublicacion": "2019-07-04", "genero": [null], "imageUrl": "https://bookcloud.me/images/love.jpg", "price": 10, "titulo": "Love", "valoracion": 10}, {"__v": 0, "_id": "5d3ec1482c665038be0c0fe6", "autor": "fghb", "descripcion": "gfgrefdg", "ebookUrl": "https://bookcloud.me/epub/a.epub", "fechaPublicacion": "2019-07-04", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada1.jpg", "price": 12, "titulo": "Princesa de Cenizas", "valoracion": 10}, {"__v": 0, "_id": "5d3ec1e92c665038be0c0fe9", "autor": "bgrbhn", "descripcion": "bnrghnbrfgen", "ebookUrl": "https://bookcloud.me/epub/portada5.jpg", "fechaPublicacion": "2019-07-16", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada5.jpg", "price": 11, "titulo": "Te lo advertí", "valoracion": 10}]
    expect(Helper.deleteDuplicatesBooks(dirtyArray)).toEqual(cleanArray);
    })
})

describe("Testing resize method to only recommend 7 books to the user", () => {
  test("Pass the clean array into the function and return the array resized", () => {
    let cleanArray = [
      {"__v": 0, "_id": "5d3ec17e2c665038be0c0fe7", "autor": "hfg", "descripcion": "retgretfgretghret", "ebookUrl": "https://bookcloud.me/epub/portada3.jpg", "fechaPublicacion": "2019-07-10", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada3.jpg", "price": 123, "titulo": "El chico de los ojos verdes", "valoracion": 14}, {"__v": 0, "_id": "5d3ec20b2c665038be0c0fea", "autor": "hrth", "descripcion": "fskdlgnjkldefgregrwethrwthrwetjkgreiofgjhorweiqjhiofgreojhghuiorehg", "ebookUrl": "https://bookcloud.me/epub/portada7.jpg", "fechaPublicacion": "2019-07-12", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada7.jpg", "price": 12, "titulo": "La profecía del cuervo", "valoracion": 10}, {"__v": 0, "_id": "5d3ec2232c665038be0c0feb", "autor": "hrth", "descripcion": "fskdlgnjkldefgregrwethrwthrwetjkgreiofgjhorweiqjhiofgreojhghuiorehg", "ebookUrl": "https://bookcloud.me/epub/portada8.jpg", "fechaPublicacion": "2019-07-12", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada8.jpg", "price": 12, "titulo": "the dreams thieves", "valoracion": 10}, {"__v": 0, "_id": "5d416224a1a4c23cec9fc9b7", "autor": "sergio", "descripcion": "ghmghmtghdm", "ebookUrl": "https://bookcloud.me/epub/love.epub", "fechaPublicacion": "2019-07-04", "genero": [null], "imageUrl": "https://bookcloud.me/images/love.jpg", "price": 10, "titulo": "Love", "valoracion": 10}, {"__v": 0, "_id": "5d3ec1482c665038be0c0fe6", "autor": "fghb", "descripcion": "gfgrefdg", "ebookUrl": "https://bookcloud.me/epub/a.epub", "fechaPublicacion": "2019-07-04", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada1.jpg", "price": 12, "titulo": "Princesa de Cenizas", "valoracion": 10}, {"__v": 0, "_id": "5d3ec1e92c665038be0c0fe9", "autor": "bgrbhn", "descripcion": "bnrghnbrfgen", "ebookUrl": "https://bookcloud.me/epub/portada5.jpg", "fechaPublicacion": "2019-07-16", "genero": [null], "imageUrl": "https://bookcloud.me/images/portada5.jpg", "price": 11, "titulo": "Te lo advertí", "valoracion": 10}]
    expect(Helper.resize(cleanArray).length).toEqual(7);  
    })
})

