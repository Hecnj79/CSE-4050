import TaskType from '../models/taskType.js';

const index2 = ((req, res) => {
  TaskType.find({})
    .then(function (data) {
       console.log("Serve the lectures data from DB on request ");
       res.status(200).json(data);
    })
    .catch(err=>console.log(err))
  }
);

export default index2;