const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

const public = path.join(__dirname, '..', 'public');
const dist = path.join(__dirname, '..', 'dist');

app.get('*', (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});

module.exports = app;
