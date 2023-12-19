import React from 'react';
import TextField from '@mui/material/TextField';

export default function TaskSearchBar(props) {

  function func(event) {
    const temp = props.ogTaskTypes.filter(v => v.name.toLowerCase() === event.target.value.toLowerCase());
    
    if(Object.keys(temp).length !== 0) {
      props.setTaskTypes(temp);
    }
    else {
      props.setTaskTypes(props.ogTaskTypes);
    }
}
  
  return (
    <div style={{marginLeft: "45%", padding: 20}}> 
      <TextField label="Search task type" onChange={event => func(event)}/>
    </div> 
  );
}