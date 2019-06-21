
class Book {
  constructor(){
    this.types = [
      { tipo: "Thriller", pond: 1.0, similiar: ["Terror","Investigación"] },
      { tipo: "Aventura", pond: 1.0, similiar: ["Ficción","Biografía"] },
      { tipo: "Terror", pond: 1.0, similiar: ["Thriller","Ficción","Investigación"] },
      { tipo: "Romántica", pond: 1.0, similiar: ["Aventura","Erótica","Sociedad","Investigación"] },
      { tipo: "Ficción", pond: 1.0, similiar: ["Terror","Thriller","Aventura"] },
      { tipo: "Investigación", pond: 1.0, similiar: ["Biografía","Enciclopedia","Autoayuda"] },
      { tipo: "Biografía", pond: 1.0, similiar: ["Enciclopedia","Sociedad","Autoayuda"] },
      { tipo: "Infantil", pond: 1.0, similiar: ["Aventura","Hogar"] },
      { tipo: "Autoayuda", pond: 1.0, similiar: ["Biografía","Investigación"] },
      { tipo: "Erótica", pond: 1.0, similiar: ["Romantica","Aventura","Biografía"] },
      { tipo: "Hogar", pond: 1.0, similiar: ["Romantica","Infantil","Sociedad"] },
      { tipo: "Enciclopedia", pond: 1.0, similiar: ["Investigación"] },
      { tipo: "Política", pond: 1.0, similiar: ["Investigación","Sociedad"] },
      { tipo: "Sociedad", pond: 1.0, similiar: ["Romantica","Política"] },
      { tipo: "Viajes", pond: 1.0, similiar: ["Romantica","Sociedad"] }
    ]
  }
}