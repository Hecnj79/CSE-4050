import express from 'express';
import { login, logout } from '../app/controllers/userController.js';
const Authrouter = express.Router();

Authrouter.post('/login', login);

Authrouter.post('/logout', logout);

export default Authrouter;
