const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port =  9090;
require("dotenv").config();

//DB connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Database connected");  
});
 mongoose.connection.on("error", (err) => {
  console.log(err);
});
//use parsing middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const userRoutes =require("./routes/user")
//use routes
app.use("/api",userRoutes);

//start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
