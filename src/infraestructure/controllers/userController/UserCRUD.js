import { UserRepository } from "../../repository/userRepository";
const userRepository = new UserRepository();

export class UserCRUD {
  constructor() {}

  static async signup(body) {
    const email = body.email;
    const passw = body.passw;
    const exist = await userRepository.existUser(email);
    if (exist) return({ message: "Ya existe este user" });
    else {
      userRepository.addUser(email,passw);
      return ({ message: "Ingresado con exito" });
    }
  }

  static async login(body){
    const token = await userRepository.findUser(body.email,body.passw);
    if(token != null)
      return({ token: token })
    else 
      return({message:"Error en el login. Email o contraseña no valida"})
  }

  static async verifyToken(body){
    const response = await userRepository.verifyToken(body.jwt);
    return response;
  }

  static async getBooks(body){
    const books = await userRepository.getBooksUser(body.email);
    return books;
  }
}