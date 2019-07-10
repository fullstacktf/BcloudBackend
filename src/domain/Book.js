
export class Book {
  constructor(){
    this.types = [
      { tipo: "Thriller",  similar: ["Terror","Investigación"] },
      { tipo: "Aventura",  similar: ["Ficción","Biografía"] },
      { tipo: "Terror",  similar: ["Thriller","Ficción","Investigación"] },
      { tipo: "Romántica",  similar: ["Aventura","Erótica","Sociedad","Investigación"] },
      { tipo: "Ficción",  similar: ["Terror","Thriller","Aventura"] },
      { tipo: "Investigación",  similar: ["Biografía","Enciclopedia","Autoayuda"] },
      { tipo: "Biografía",  similar: ["Enciclopedia","Sociedad","Autoayuda"] },
      { tipo: "Infantil",  similar: ["Aventura","Hogar"] },
      { tipo: "Autoayuda",  similar: ["Biografía","Investigación"] },
      { tipo: "Erótica",  similar: ["Romantica","Aventura","Biografía"] },
      { tipo: "Hogar",  similar: ["Romantica","Infantil","Sociedad"] },
      { tipo: "Enciclopedia",  similar: ["Investigación"] },
      { tipo: "Política",  similar: ["Investigación","Sociedad"] },
      { tipo: "Sociedad",  similar: ["Romantica","Política"] },
      { tipo: "Viajes",  similar: ["Romantica","Sociedad"] }
    ]
  }
}