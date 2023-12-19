import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Page from './components/template/Page';
import Home from './components/home/Home';
import TaskList from './components/task/TaskList';

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
    element: <Page />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <TaskList />,
      },
    ],
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
