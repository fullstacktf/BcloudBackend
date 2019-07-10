import express from 'express';
import cors from 'cors';
const app = express();
import userRouter from './infraestructure/routes/userRouter';

app.use(express.json());
app.use(cors());
app.use('/users',userRouter);


app.listen(process.env.PORT || 8081, err => {
  if (err) {
    console.log(err);
  }
  console.log("Escuchando en el Puerto 8081");
});



