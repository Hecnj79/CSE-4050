import Task from '../models/task.js';

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

export {index, update, create, deleteTask};