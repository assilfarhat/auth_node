import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/user.js";

const port =  9090;
const app = express();
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose
.connect("mongodb://127.0.0.1:27017/authentication")
  .then(() => {
    console.log(`Connected to authentication`);
  })
  .catch(err => {
    console.log(err);
  });
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);


app.listen(port, () => {
  console.log(`Server running at http:${port}/`);                                                       
});
