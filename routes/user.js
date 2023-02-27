const express = require("express");
const { signin, signup } = require("../controllers/auth");
const {
  updateUser,
  DeleteAcc,
  updateLocation,
  getUserByName,
} = require("../controllers/user");
const { verifyUsername } = require("../middleware/verifysighup");
const router = express.Router();

router.post("/signup", [verifyUsername], signup);
router.post("/signin", signin);
//router.get('/signout',signout);
router.put("/updateLocation", updateLocation);
router.put("/updateUser", updateUser);
router.get("/getUserByname", getUserByName);
router.delete("/deleteUser/:login", DeleteAcc);
module.exports = router;
