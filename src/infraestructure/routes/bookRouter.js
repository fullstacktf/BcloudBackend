import { Router } from "express";
import bookController from "../controllers/bookController";

const router = Router();

router.post("/signup", async (req, res) => {
  const response = await bookController.BookCRUD.signup(req.body);
  res.status(200).json(response);
});

router.delete("/delete/:titulo", async (req, res) => {
  const response = await bookController.BookCRUD.delete(
    req.body,
    req.params.titulo
  );
  res.status(200).json(response);
});

router.post("/upload", (req, res) => {
  const response = bookController.BookUpload.uploadBook(req.body, req.files);
  res.status(200).json(response);
});

router.get("/getbook/:tag", async (req, res) => {
  const response = await bookController.BookCRUD.getBook(
    req.body,
    req.params.tag
  );
  res.status(200).json(response);
});
router.get("/getallbooks", async (req, res) => {
  const response = await bookController.BookCRUD.getAllBooks();
  res.status(200).json(response);
});

export default router;
