import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Box from '@mui/material/Box';
import TaskSearchBar from './TaskSearchBar';
import FormDialog from '../dialog/Dialog';
import UpdateDialog from '../dialog/updateDialog';
import DeleteButton from '../dialog/DeleteButton';

export default function TaskList(props) {
  const [inputLetters, setInputLetters] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskTypes, setTaskTypes] = useState([]);

  const fetchData = async () => {
    const {data:tasks} = await axios.get('http://localhost:4000/api/tasks');
    const {data:taskTypes} = await axios.get('http://localhost:4000/api/task-types');
    setTasks(tasks);
    setTaskTypes(taskTypes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setInputLetters(event.target.value);
  };

  const handledragover = (event) => {
    event.preventDefault();
  };

  const handledrop = (event) => {
    event.preventDefault();
    var task_id = event.dataTransfer.getData("task_id");
    var type_id = event.target.attributes.type_id.value;
    const url = "/api/tasks/"+task_id.substring(4);
    const data = {type_id};
    
    axios.put(url, data)
    .then(response => {
      if (response.status === 200) {
        fetchData();
      }
    })
    .catch(error => {
      console.error('Error updating task type:', error.response.data);
    });
  };

  const handledrag = (event) => {
    event.dataTransfer.setData("task_id", event.target.attributes.id.value);
  };

  return (
    <Container disableGutters maxWidth="false" sx={{ px:1, py:1 }}>
      <FormDialog fetchData={fetchData}></FormDialog>
      <TaskSearchBar value={inputLetters} onChange={handleSearch}/>
      <Container disableGutters maxWidth="ld" component="main">
        <Grid container spacing={2} alignItems="flex-end" >
        {taskTypes?.map(type => (
          <Grid item xs={12} md={4} key={type.name+"-tasks"} className="new-tasks">
            <Card variant="outlined" sx={{ borderRadius:0,mb:1}}>
              <Typography sx={{px:2,py:1,fontWeight:500,}}>{type.name}</Typography>
            </Card>
            <Stack
              id={type.name+"-tasks-stack"}
              type_id={type._id}
              droppable="true"
              onDragOver={handledragover}
              onDrop={handledrop}
              spacing={1}
              className="cse4050-task-list"
              sx={{
                height: 600,
              }}
            >
              {tasks?.filter(task => task.type_id === type._id).map(task => (
              <Card
                key={"task"+task._id}
                id={"task"+task._id}
                draggable="true"
                droppable="false"
                onDragStart={handledrag}
                variant="outlined"
                className="cse4050-task-task"
                sx={{borderLeft:3, borderColor: type.color, bgcolor: (task.description.toLowerCase().includes(inputLetters.toLowerCase()) && inputLetters) ?'red.200': 'grey.200'}}
              >
                <CardContent>
                  <Typography>{task.description}</Typography>
                </CardContent>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                  <UpdateDialog fetchData={fetchData} task_id={task._id}></UpdateDialog>
                  <DeleteButton fetchData={fetchData} task_id={task._id}></DeleteButton>
                </Box>
              </Card>
              ))}
            </Stack>
          </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
