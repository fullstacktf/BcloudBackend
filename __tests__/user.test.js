const Dbfake = require("../src/infraestructure/Dbfake");

describe("Testing our data bases", () => {
  it("Adding a new user", () => {
    const db = new Dbfake();
    db.addUser("jose@gmail.com","josepassword");
    expect(db.addUser("sergio@gmail.com","sergiopassword")).toContainEqual({email:"sergio@gmail.com",passw:"sergiopassword"});
  });
});
