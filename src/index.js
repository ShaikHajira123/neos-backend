const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require("mongoose");


dotenv.config();

const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));



app.use(router);


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 5005');
  app.listen(5005);
})


  
  