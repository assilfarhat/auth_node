const User = require("../models/user.model");

exports.getUserByEmail = (req, res) => {
    const { login } = req.body
    User.findOne({ login }, (err, user) => {
        if (err || !user) {
            res.status(500).json({ 
                message: "'No account with that email address exists." });
        } else {
            const {_id, name, login,longitude,latitude} = user
            res.status(200).json({
                user: {
                _id,
                name,
                login,
                longitude,
                latitude
              }});
        }
    })

  };
  exports.updateUser = (req, res) => {
    User
    .findOneAndUpdate({ "login": req.body.login },  {   "name": req.body.name, "longitude": req.body.longitude , "latitude": req.body.latitude } )
    .then(doc => {
        res.status(200).json({
            message:"User updated successfully",
            user: {
            login : req.body.login,
            name : req.body.name,
            longitude : req.body.longitude,
            latitude : req.body.latitude
          }});
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
  }
 
  exports.DeleteAcc = (req, res) => {
    User.findOneAndDelete({ "login": req.params.login }, (err, user) => {
        if (err ||!user) {
            res.status(500).json({ 
                message: "'No account with that email address exists." });
        } else {
            res.status(200).json({
                message: "User deleted",
                user
            });
        }
    })
    
  }
  exports.updateLocation = (req, res) => {
    User
    .findOneAndUpdate({ "login": req.body.login },  { "longitude": req.body.longitude , "latitude": req.body.latitude } )
    .then(doc => {
        res.status(200).json({
            user: {
            login : req.body.login,
            longitude : req.body.longitude,
            latitude : req.body.latitude
          }});
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
  }