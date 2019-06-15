const { Db } = require("../domain/Db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserData } = require("./models");
const { LibroData } = require("./models");

class DbMongo extends Db {
  constructor(name) {
    super();
    this.name = name;
  }

  async findUser(email_, passw_) {
    const user = await UserData.findOne({ email: email_ });
    let passwordIsValid = bcrypt.compareSync(passw_, user.passw);

    if (passwordIsValid) {
      let token = jwt.sign({ id: email_ }, "supersecret", {
        expiresIn: 10
      });
      return token;
    } else
        return "";
  }

  addUser(email_, passw_) {
    let cryptpassw = bcrypt.hashSync(passw_, 8);
    let data = new UserData({
      passw: cryptpassw,
      email: email_,
      gustos: []
    });
    data.save().then(console.log("Ingresado con éxito"));
  }
}

module.exports = DbMongo;
