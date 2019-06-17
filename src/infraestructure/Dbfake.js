const { Db } = require("../domain/Db");

class Dbfake extends Db {
  constructor(name) {
    super();
  }

  findUser(email_, passw_) {}

  addUser(email_, passw_) {
    const data = {
      email: email_,
      passw: passw_
    };

    let memory = [];
    memory.push(data);
    return memory;
  }
}

module.exports = Dbfake;
