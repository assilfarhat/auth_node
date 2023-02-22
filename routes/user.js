import express from 'express';
import {signup, login,signout} from '../controllers/user.js';

const router = express.Router();
  router
  .route('/signup')
  .post(signup);
  router
  .route('/login')
  .post(login);
  router
  .route('/signout')
  .get(signout);
  export default router;  