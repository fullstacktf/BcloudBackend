import { Router } from 'express';
import  userController from '../controllers/userController';


const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Bienvenido a Bcloud");
});

router.post("/login", async (req, res) => {
  const response = await userController.UserCRUD.login(req.body);
  res.status(200).json(response);
});

router.post("/signup", async (req, res) => {
  const response = await userController.UserCRUD.signup(req.body);
  res.status(200).json(response);
});

router.post("/verifyToken", async (req, res) => {
  const response = await userController.UserCRUD.verifyToken(req.body);
  res.status(200).json(response);
});

router.get("/booksUser", async (req,res) =>{
  const response = await userController.UserCRUD.getBooks(req.body);
  res.status(200).json(response);
});

router.post("/like", async (req,res) =>{
  const response = await userController.UserLikes.like(req.body);
  res.status(200).json(response);
});

router.post("/dislike", async (req,res) =>{
  const response = await userController.UserLikes.dislike(req.body);
  res.status(200).json(response);
});

router.post("/getLikes", async (req,res) =>{
  const response = await userController.UserLikes.getLikes(req.body);
  res.status(200).json(response);
});

export default router;