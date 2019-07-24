import { Db } from "../../domain/Db";

export class Dbfake extends Db {
  constructor(name) {
    super();
  }

  findUser(email_, passw_) {}

  addUser(email_, passw_) {
    const data = {
      email: email_,
      gustos:{},
      passw: passw_
    };

    let memory = [];
    memory.push(data);
    return memory[0];
  }
}
