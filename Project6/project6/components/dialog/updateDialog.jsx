import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function UpdateDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [errorColor, setErrorColor] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setErrorColor(false);
    setHelperText('');
  };

  const handleClose = () => {
    setOpen(false);
    props.fetchData();
  };

  const handleSubmit = () => {
  var description = document.querySelector('#updateTask').value;
  const url = '/api/tasks/'+props.task_id;
  const data = {description};
  
  axios.put(url, data)
  .then(response => {
    if (response.status === 200) {
      handleClose();
      props.fetchData();
    }
  })
  .catch(error => {
    console.error('Error updating task description:', error);
    setErrorColor(true);
    setHelperText('Please provide a new task description');
  });
    setErrorColor(false);
    setHelperText('');
  };

  return (
    <React.Fragment>
      <Button variant="contained" size='small' onClick={handleClickOpen}>
        Update Task
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="updateTask"
            label="Enter New Task Description"
            fullWidth
            variant="standard"
            error={errorColor}
            helperText={helperText}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
