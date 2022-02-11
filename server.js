const path = require('path');
const express = require('express');
const app = express();
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;

// app.use?


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
