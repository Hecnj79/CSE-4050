import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';

import Example from './components/example/Example';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('reactapp'));
const root2 = ReactDOM.createRoot(document.getElementById('reactapp2'));

root.render(<Example />);
root2.render(<Header />);
