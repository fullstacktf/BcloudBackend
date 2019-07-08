
export class Book {
  constructor(){
    this.types = [
      { tipo: "Thriller",  similiar: ["Terror","Investigación"] },
      { tipo: "Aventura",  similiar: ["Ficción","Biografía"] },
      { tipo: "Terror",  similiar: ["Thriller","Ficción","Investigación"] },
      { tipo: "Romántica",  similiar: ["Aventura","Erótica","Sociedad","Investigación"] },
      { tipo: "Ficción",  similiar: ["Terror","Thriller","Aventura"] },
      { tipo: "Investigación",  similiar: ["Biografía","Enciclopedia","Autoayuda"] },
      { tipo: "Biografía",  similiar: ["Enciclopedia","Sociedad","Autoayuda"] },
      { tipo: "Infantil",  similiar: ["Aventura","Hogar"] },
      { tipo: "Autoayuda",  similiar: ["Biografía","Investigación"] },
      { tipo: "Erótica",  similiar: ["Romantica","Aventura","Biografía"] },
      { tipo: "Hogar",  similiar: ["Romantica","Infantil","Sociedad"] },
      { tipo: "Enciclopedia",  similiar: ["Investigación"] },
      { tipo: "Política",  similiar: ["Investigación","Sociedad"] },
      { tipo: "Sociedad",  similiar: ["Romantica","Política"] },
      { tipo: "Viajes",  similiar: ["Romantica","Sociedad"] }
    ]
  }
}