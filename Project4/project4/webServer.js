'use strict';

/*
 * A simple Node.js program for exporting the current working directory via a webserver listing
 * on a hard code (see portno below) port. To start the webserver run the command:
 *    node webServer.js
 *
 */

/* jshint node: true */

var express = require('express');
const path = require('path');

var portno = 3000;   // Port number to use

var app = express();

var cse4050models = require('./modelData/kanbanApp.js').cse4050models;

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));

app.get('/api/tasks', function (request, response) {
  return response.status(200).send(cse4050models.taskListModel());
});

app.get('/api/task-types', function (request, response) {
  setTimeout(() => {
    return response.status(200).send(cse4050models.taskTypeListModel());
  }, 3000);
});

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
