const User= require('../models/user.model')
var jwt = require("jsonwebtoken")
var expressJwt = require("express-jwt")

exports.signup = (req, res) => {
  const user = new User(req.body)
  user.save((err, user) => {
    if (err) {
      return res.status(400).json(
       { error: 'unable to add user'
      })
    }
    return res.status(201).json({
      message: "Successfully added user",
      user
    })
  })
}

exports.signin = (req, res) => {
  const { login, password } = req.body
  User.findOne({ login }, (err, user) => {
    if (err|| !user) {
      return res.status(400).json(
       { error: 'unable to find user email address'
      })
    }
    // authenticate user
    if (!user.authenticate(password)) {
      return res.status(401).json(
       { error: 'Email and password do not match'
      })
    }
    // create token
    const token = jwt.sign({_id:user._id}, process.env.SECRET)
    //put token into cookie
    res.cookie('token', token, {expire : new Date()+100})
    //send response
    const {_id, name, login,longitude,latitude} = user
    res.status(200).json({
      token,
      user: {
        _id,
        name,
        login,
        longitude,
        latitude
      }
    })
    exports.signout =(req,res) => {
      res.clearCookie('token')
      return res.json({
        message: 'Signout successful'   
      })
    }

    
    
  })
}