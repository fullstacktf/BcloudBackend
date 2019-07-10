import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userController = new UserController();

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Bienvenido a Bcloud");
});

router.post("/login", async (req, res) => {
  const response = await userController.login(req.body);
  res.status(200).json(response);
});

router.post("/signup", async (req, res) => {
  const response = await userController.signup(req.body);
  res.status(200).json(response);
});

router.get("/booksUser", async (req,res) =>{
  const response = await userController.getBooks(req.body);
  res.status(200).json(response);
})




export default router;