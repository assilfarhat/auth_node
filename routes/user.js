const express= require('express')
const {signout,signin, signup } = require('../controllers/auth')
const {updateUser,getUserByEmail,DeleteAcc, updateLocation } = require('../controllers/user')
const router = express.Router()

router.post('/signup',signup);
router.post('/signin',signin);
//router.get('/signout',signout);
router.put('/updateLocation',updateLocation);
router.put('/updateUser',updateUser);
router.get('/getUserByEmail',getUserByEmail);
router.delete('/deleteUser/:login',DeleteAcc);
module.exports = router

  
