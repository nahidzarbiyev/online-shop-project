const env = require(`dotenv`);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
// //routes

app.use('/user', require('./routes/userRouter') )



// const authRouter = require("./routes/auth");
// const adminauthRouter = require("./routes/admin/auth");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
  useTempFiles:true
}))
env.config();

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  });

//   app.use("/api", authRouter);
// app.use("/api", adminauthRouter);

app.get("/", (req, res) => {
  res.send("hello");
  console.log("connect");
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
