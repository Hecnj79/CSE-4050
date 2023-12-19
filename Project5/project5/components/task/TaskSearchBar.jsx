import React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

export default function TaskSearchBar(props) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} style={{ height:60, margin:10}}>
        <TextField
          id="search-tasks"
          label="Search"
          variant="outlined"
          size="small"
          style={{
            position:'absolute',
            right:10
          }}
          onChange={props.onChange}
        />
      </Grid>
    </Grid>
  );

}