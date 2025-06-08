// d
// Created by Trinity Replit Agent

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to d!</h1><p>Your Trinity-created app is running!</p>');
});

app.listen(PORT, () => {
  console.log(`d is running on port ${PORT}`);
});