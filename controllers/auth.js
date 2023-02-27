const User= require('../models/user.model')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.signup = async (req, res) => {
  const  hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
  User.create({ 
    login: req.body.login,
    password: hashedPwd,	
    longitude: req.body.longitude,
    latitude : req.body.latitude
   }).then(
    result => {
        res.status(201).json({
            message: "User added successfully",
            result: result

        });
    })
.catch(err => {
    res.status(500).send({ message: err.message });
});
};


exports.signin = async (req, res) => {
  const user = await User.findOne({ login: req.body.login })
  if (user) {
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword) {
   const {_id, login,longitude,latitude} = user
    res.status(200).json({
      message: "Valid password",
      user: {
        _id,
        login,
        longitude,
        latitude
      }
    })
    }
  else {
    res.status(400).json({ error: "Invalid Password" });
  }
  } else {
  res.status(401).json({ error: "User does not exist" });
  }
  };
      
 