const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-kbyej.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333); 