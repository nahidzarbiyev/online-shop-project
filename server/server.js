const env = require(`dotenv`);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//routes
const authRouter = require("./routes/auth");
const adminauthRouter = require("./routes/admin/auth");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', authRouter)
app.use('/api', adminauthRouter)
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

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
