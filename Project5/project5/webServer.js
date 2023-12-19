'use strict';

/*
 * A simple Node.js program for exporting the current working directory via a webserver listing
 * on a hard code (see portno below) port. To start the webserver run the command:
 *    node webServer.js
 *
 */

/* jshint node: true */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';

var portno = 3000; 
var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.use(cors());

//Connect to the DB and Create your routes here;
mongoose.connect("mongodb+srv://006868830:cse4050@cluster0.3ydouhb.mongodb.net/");

app.get("/*", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"), err => {
       if (err) {
           console.log(err);
       }
   });
});

var server = app.listen(portno, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});