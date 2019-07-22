import { Router } from "express";
import { BookController } from "../controllers/bookController";

const bookController = new BookController();

const router = Router();

router.post("/signup", async (req, res) => {
  const response = await bookController.signup(req.body);
  res.status(200).json(response);
});

router.delete("/delete/:titulo", async (req, res) => {
  const response = await bookController.delete(req.body, req.params.titulo);
  res.status(200).json(response);
});

router.post("/upload", function(req, res) {
  const response = bookController.uploadBook(req.body, req.files);
  res.status(200).json(response);
});

export default router;
