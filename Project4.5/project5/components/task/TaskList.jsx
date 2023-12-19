import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import TaskSearchBar from './TaskSearchBar';

export default function TaskList() {
  const [inputLetters, setInputLetters] = useState('');
  // const [tasks, setTasks] = useState(window.cse4050models.taskListModel());
  // const [taskTypes, setTaskTypes] = useState(window.cse4050models.taskTypeListModel());

  const [tasks, setTasks] = useState([]);
  const [taskTypes, setTaskTypes] = useState([]);
  const [ogTaskTypes, setOgTaskTypes] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/task-types');
        setTaskTypes(response.data);
        const response2 = await axios.get('http://localhost:3000/api/tasks');
        setTasks(response2.data);
        setOgTaskTypes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handledragover = (event) => {
    event.preventDefault();
  };

  const handledrop = (event) => {
    event.preventDefault();
    var task_id = event.dataTransfer.getData("task_id");
    if(event.target.classList.contains('cse4050-task-list')) {
      event.target.appendChild(document.getElementById(task_id));
    }
  };

  const handledrag = (event) => {
    event.dataTransfer.setData("task_id", event.target.attributes.id.value);
  };

  return (
    <Container disableGutters maxWidth="false" sx={{ px:1, py:1 }}>
      <TaskSearchBar value={inputLetters} setValue={setInputLetters} ogTaskTypes={ogTaskTypes} setTaskTypes={setTaskTypes}/>
      <Container disableGutters maxWidth="ld" component="main">
        <Grid container spacing={2} alignItems="flex-end" >
        {taskTypes?.map(type => (
          <Grid item xs={12} md={4} key={type.name+"-tasks"} className="new-tasks">
            <Card variant="outlined" sx={{ borderRadius:0,mb:1}}>
              <Typography sx={{px:2,py:1,fontWeight:500,borderLeft:3,borderColor:type.color}}>{type.name}</Typography>
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
              >
                <CardContent sx={{borderLeft:3,borderColor:type.color}}>
                  <Typography>{task.description}</Typography>
                </CardContent>
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
