import React from 'react';
// import { Link, Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './TopNav.css';
import axios from 'axios';

export default function TopNav() {
	const [user, setUser] = React.useState('');

	React.useEffect(() => {
		const localUser = localStorage.getItem("user_name");
		if(localUser) {
		  setUser(localUser);
		}
	 },[user]);

	 const handleLogout = () => {
		axios
		  .post('/auth/logout') // Update with your API URL
		  .then(response => {
			localStorage.removeItem("user_name");
			setUser('');
			window.location.reload();
		  })
		  .catch(err => {
			console.log(err);
		  });
	  };

	return (
	<AppBar position="static">
		<Toolbar className="cse4050-toolbar">
			<Typography variant="h6" className="cse4050-logo">
			Kanban Board
			</Typography>
			<Stack
				direction="row"
				spacing={2}
				sx={{ '& a.active': {color:theme=>theme.palette.primary.contrastText, bgcolor:theme=>theme.palette.primary.main, } }}
			>	
				<Button variant='contained' href='/' underline='none'>Home</Button>
				<Button variant='contained' href='/tasks' underline='none'>Tasks</Button>
				{user?
            	<Button onClick={handleLogout} variant="contained" underline="none">Logout</Button>
           		:
            	<Button href="/login" variant="contained" underline="none">Login</Button> }
			</Stack>
		</Toolbar>
	</AppBar>
	);
}
