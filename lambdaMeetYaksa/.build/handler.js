"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const bodyParser = __importStar(require("body-parser"));
const serverless = require('serverless-http');
const app_1 = require("./src/app");
exports.expressApp = express();
exports.expressApp.use(bodyParser.json());
exports.expressApp.post('/fulfillment', app_1.createDialogflowApp);
module.exports.fulfillment = serverless(exports.expressApp);
