const express = require('express');
const connectDB = require('./connection/database');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const PORT = process.env.PORT || 8000;
const app = express();

// env file
dotenv.config({ path: '.env' });

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// routes
app.get('*', checkUser);
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/product', requireAuth, (req, res) => {
  res.render('product');
});
app.use(userRoutes);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
