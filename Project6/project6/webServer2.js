'use strict';

/*
 * Project 5 Extra Credit
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import mongoose from 'mongoose';
import TaskType from './app/models/taskType.js';
import Task from './app/models/task.js';
import cors from 'cors';

var portno = 4000; 
var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.use(cors());

//Connect to the DB and Create your routes here;
mongoose.connect("mongodb+srv://006868830:cse4050@cluster0.3ydouhb.mongodb.net/");

app.get('/api/task-types',  async (req, res) => {
  const result = await TaskType.find();
  res.send(result);
})

app.get('/api/tasks', async (req, res) => {
  const result = await Task.find();
  res.send(result);
})

var server = app.listen(portno, function () {
  var port = server.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});