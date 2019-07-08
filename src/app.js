import express from 'express';
import cors from 'cors';
import {DbMongo} from "../src/infraestructure/DbMongo";
const app = express();

app.use(express.json());
app.use(cors());


const DataBase = new DbMongo('mongo');

app.listen(process.env.PORT || 8081, err => {
  if (err) {
    console.log(err);
  }
  console.log("Escuchando en el Puerto 8081");
});



app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a Bcloud");
});

app.post("/login", async (req, res) => {
  const token = await DataBase.findUser(req.body.email,req.body.passw);
  res.send({ token });
});

app.post("/signup", async (req, res) => {
  const exist = await DataBase.existUser(req.body.email);
  if(exist)
    res.send("Email ya usado");
  else{
    DataBase.addUser(req.body.email, req.body.passw);
    res.send(200);
  }
});
