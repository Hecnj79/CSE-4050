import React from 'react';
import ReactDOM from 'react-dom/client';

import CSECourses from './components/courses/CSECourses';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('reactapp'));
const root2 = ReactDOM.createRoot(document.getElementById('reactapp2'));

root.render(<CSECourses />);
root2.render(<Header />);
