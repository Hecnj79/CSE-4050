"use strict";

import mongoose from 'mongoose';

// create a schema
var userSchema = new mongoose.Schema({
    user_name: String,
    first_name: String,
    last_name: String,
    password: String,
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
export default User;