import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();
import userRouter from './infraestructure/routes/userRouter';
import bookRouter from './infraestructure/routes/bookRouter';


app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use('/api/users',userRouter);
app.use('/api/books',bookRouter);

app.options("/*", function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});


app.listen(process.env.PORT || 8081, err => {
  if (err) {
    console.log(err);
  }
  console.log('listening in port 8081');
});



