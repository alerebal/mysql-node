const express = require('express');
const cors = require('cors');

const app = express();  

// require('./database');

  
// Settings
app.set('port', process.env.PORT || 3100);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/users.routes'));

module.exports = app;