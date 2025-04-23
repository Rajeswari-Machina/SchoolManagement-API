require('dotenv').config()
const express = require('express');
const { urlencoded } = require('body-parser');
const app = express();
const cors = require('cors');
const  limiter = require('./utils/rateLiimit');
const db = require('./config/db');
const schoolRoutes = require('./routes/schoolRoutes');

app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));

app.use('/api/schools/',schoolRoutes)

const PORT = process.env.PORT || 5000;

db.query('SELECT 1')
.then(()=>{
  console.log('Database connected successfully');
})
.catch((err)=>{
  console.error('Database connection failed:', err);
})
app.listen(PORT,()=>{
  console.log(`School MAnagemnt API is running on port ${PORT}`)
})