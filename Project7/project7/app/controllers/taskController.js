import Task from '../models/task.js';
import User from '../models/user.js';

const index = ((req, res) => {
  Task.find({})
    .then(function (data) {
       console.log("Serve the lectures data from DB on request ");
       res.status(200).json(data);
    })
    .catch(err=>console.log(err))
  }
);

const update = async (req, res) => {
    const { task_id } = req.params;
    const data = req.body;

    try {
      if(data.description === '')
        res.sendStatus(400);
      else{
        const taskUpdated = await Task.findByIdAndUpdate(task_id, data, { new: true });
        res.status(200).send(taskUpdated);
      }
    } 
    catch (err) {
      res.status(500).send(err);
    }
};

const create = async (req, res) => {
  const { description } = req.body;

  try{
    if(description === '')
      res.sendStatus(400);
  
    else {
      Task.create({type_id: '6542a6bce50fe6cffa796a19', description: description});
      res.sendStatus(200);
    }
  } 
  catch(err) {
    res.sendStatus(500);
  }
};

const deleteTask = async (req, res) => {
  const {task_id} = req.params;
  try{
    const taskDelete = await Task.findByIdAndDelete(task_id);
    res.status(200).send(taskDelete);
  }
  catch(err) {
    res.sendStatus(500);
  }
};

const register = async (req, res) => {
  const { first_name, last_name, user_name, password } = req.body;
  const user = await User.findOne({user_name: user_name});

  try{
    if(first_name === '' || last_name === '' || user_name ==='' || password === '')
      return res.sendStatus(400);

    if(user)
      return res.status(400).send('User name taken');

    else{
      User.create({first_name: first_name, last_name: last_name, user_name: user_name, password: password});
      res.sendStatus(200);
    }
  } 
  catch(err) {
    res.sendStatus(500);
  }
};

export {index, update, create, deleteTask, register};