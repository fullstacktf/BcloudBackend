import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();
import userRouter from './infraestructure/routes/userRouter';
import bookRouter from './infraestructure/routes/bookRouter';

const corsOptions = {
  origin: ['https://new.recipemug.club', 'https://api.recipemug.club', 'https://recipemug.club', 'http://localhost:1234'],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false
}

app.use(cors(corsOptions));


app.use(fileUpload());
app.use(express.json());
app.use('/api/users',userRouter);
app.use('/api/books',bookRouter);



app.listen(process.env.PORT || 8081, err => {
  if (err) {
    console.log(err);
  }
  console.log('listening in port 8081');
});



