import { Router } from 'express';
import { BookController } from '../controllers/bookController';

const bookController = new BookController();

const router = Router();

router.post("/signupBook", async (req, res) => {
 // const response = await bookController.signup(req.body);
  res.status(200).json("heyman");
});


export default router;