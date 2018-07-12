'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const { dialogflowFulfillment } = require ('./src/index');

const expressApp = express();

var myLogger = function (req, res, next) {
  console.log('express Request headers: ' + JSON.stringify(req.headers));
  console.log('express Request body: ' + JSON.stringify(req.body));
  next()
}

expressApp.use(express.json());
expressApp.use(myLogger);
expressApp.post('/fulfillment', dialogflowFulfillment);
exports.fulfillment = serverless(expressApp);
