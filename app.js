const express = require('express');

const mongoose = require('mongoose');

const app = express();

const { PORT = 3001 } = process.env;

const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(cors());