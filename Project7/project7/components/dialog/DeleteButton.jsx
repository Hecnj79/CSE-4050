import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function DeleteButton(props) {

  const handledelete = () => {
    axios.delete('/api/tasks/'+props.task_id)
      .then(response => {
        if(response.status === 200){
          console.log('Task deleted successfully:', response.data);
          props.fetchData();
        }
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
    };
    
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" size='small' color='error' onClick={handledelete}>Delete</Button>
    </Stack>
  );
}
