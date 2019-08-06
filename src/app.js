import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();
import userRouter from './infraestructure/routes/userRouter';
import bookRouter from './infraestructure/routes/bookRouter';

const corsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(fileUpload());
app.use(express.json());
app.use(cors(corsOptions));



app.use('/api/users',userRouter);
app.use('/api/books',bookRouter);



app.listen(process.env.PORT || 8081, err => {
  if (err) {
    console.log(err);
  }
  console.log('listening in port 8081');
});



