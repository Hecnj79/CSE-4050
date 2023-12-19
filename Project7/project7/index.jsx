import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Page from './components/template/Page';
import Home from './components/home/Home';
import TaskList from './components/task/TaskList';
import SignIn from './components/login/Login';
import SignUp from './components/login/Signup';

const Protected = ({children}) => {
  const localUser = localStorage.getItem("user_name");
  return localUser ? children : <Navigate to="/login" replace />;
}; 

const theme = createTheme({
  palette: {
    background: {
      default: "#EBEDF0"
    }
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Page /></Protected>,
    children: [
      {
        path: "/",
        element: <Protected><Home /></Protected>,
      },
      {
        path: "/tasks",
        element: <Protected><TaskList /></Protected>,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

var view = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<Page />} />
    </ThemeProvider>
  </React.StrictMode>
);


const root = ReactDOM.createRoot(document.getElementById('reactapp'));
root.render(view);
