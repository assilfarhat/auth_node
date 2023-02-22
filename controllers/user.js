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

    export async function login(req, res) {
      const user = await User.findOne({ login: req.body.login });
      if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
        res.status(200).json({ message: "Valid password" });
        }
      else {
        res.status(400).json({ error: "Invalid Password" });
      }
      } else {
      res.status(401).json({ error: "User does not exist" });
      }
      };

      export async function signout(req, res) {
        req.session.destroy((err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({ message: "logged out" });
          }
        });
      }
