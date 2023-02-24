const express= require('express')
const {signout,signin, signup } = require('../controllers/user')
const router = express.Router()

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/signout',signout);
module.exports = router

  