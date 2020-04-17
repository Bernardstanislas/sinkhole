var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

// Catch all requests and reply randomly
app.use(function(req, res, next) {
  const yolo = Math.round(20 * Math.random());
  const responseTime = Math.round(500 * Math.random());

  // Return a 404 with a 5% probability
  if (yolo === 0) {
    setTimeout(() => {
      res.status(404).send();
    }, responseTime);
    return;
  }
  // Do not respond with a 5% probability
  if (yolo === 1) {
    return
  }
  // Return a 500 with a 5% probability
  if (yolo === 2) {
    setTimeout(() => {
      res.status(500).send();
    }, responseTime);
    return;
  }

  setTimeout(() => {
    res.status(200).send();
  }, responseTime);
  return
});

module.exports = app;
