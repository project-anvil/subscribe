const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { saveSubscriber } = require('./src/boundaries')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/', (req, res, next) =>
  saveSubscriber(req.body)
    .then(() => res.status(201).send())
    .catch(next)
)

module.exports = app;
