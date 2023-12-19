import User from "../models/user.js";

const login = ( (req, res, next) => {
  let userName = req.body.username;
  let password_attempt = req.body.password;

  User.findOne({ user_name: userName }).then(function(user) {
    if (!user) {
      console.log("User with user_name:" + userName + " not found.");
      res.status(400).send("Login name was not recognized");
    }
    if (user.password != password_attempt) {
      res.status(400).send("Wrong password");
    }
    else{
      req.session.regenerate(function (err) {
      if (err) next(err)
  
      // store user information in session, typically a user id
      req.session.user_id = user._id
      req.session.cookie.originalMaxAge = 3600000; // 1 hr
      req.session.cookie.reSave = true;
      // save the session before redirection to ensure page load does not happen before session is saved
      req.session.save(function (err) {
        if (err) return next(err)
        res.status(200).send(user);
      })
    })} 
  })
  .catch(err=>console.log(err));
});

const logout = (req, res) => {
  res.sendStatus(200);
};

export {login, logout};