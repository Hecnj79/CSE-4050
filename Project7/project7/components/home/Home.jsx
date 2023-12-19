import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {
  const user = localStorage.getItem('user_name');
  
  return (
    <Container>
    <Typography variant="h3">Hi {user}!</Typography>
    <Typography variant="h2">Welcome to Kanban Board!</Typography>
    </Container>
  );
}
