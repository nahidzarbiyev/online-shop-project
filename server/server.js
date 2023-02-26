const express = require('express');
const env = require('dotenv');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const initialDataRoutes = require('./routes/admin/initialdata') 
const pageRoutes = require('./routes/admin/page') 
const addressRoutes = require("./routes/adress");
env.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', initialDataRoutes);
app.use('/api', pageRoutes);
app.use("/api", addressRoutes);
app.use('/public',express.static(path.join(__dirname, 'uploads')))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  });
