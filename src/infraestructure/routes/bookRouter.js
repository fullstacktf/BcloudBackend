import { Router } from "express";
import { BookController } from "../controllers/bookController";

const bookController = new BookController();

const router = Router();

router.post("/signupBook", async (req, res) => {
  // const response = await bookController.signup(req.body);
  res.status(200).json("heyman");
});

router.post("/upload", function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send("No files were uploaded.");
  }
  
  let epubFile = req.files.epubFile;
  let imageFile = req.files.imageFile;
  epubFile.mv(`/home/sergio/${req.files.epubFile.name}`, function(err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
  });

  imageFile.mv(`/home/sergio/${req.files.imageFile.name}`, function(err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
  });
});

export default router;
