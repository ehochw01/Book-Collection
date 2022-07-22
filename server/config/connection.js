const mongoose = require('mongoose');
// const path = require('path');
// require('dotenv').config({path: path.join(__dirname, "../.env")});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
