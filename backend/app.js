const http = require('http');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST PUT PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(adminRoutes);

app.listen(3000);
