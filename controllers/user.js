import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
var saltRounds = 10;

export async function signup(req, res) {
    const  hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    User.create({ login: req.body.login,
        password: hashedPwd,
        name: req.body.name,	
        
       
        })
      .then(
        res.status(200).json({
            login: req.body.login,
          password: req.body.password,
        }))
     
    }
