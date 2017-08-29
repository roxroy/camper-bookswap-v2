const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const userServices = require('../services/userService'); 

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy(
  (username, password, done) => {
    process.nextTick(() => {
      User.findOne({ username: username }, (err, user) => {

        if (err) {
          return done(err);
        }
        if (user) { 
          return done(null, false,  { message : 'That username is already taken.'}); 
        } else {
  
          userServices.addNew({username, password}, (newUser) => {
            return done(null, newUser);
          });  
        }
      });
    });
  }));  

  passport.use('local-login', new LocalStrategy( 
  (username, password, done) => {
    process.nextTick(() => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) { 
          return done(null, false,  { message: 'Incorrect userName or Password.'}); 
        }
        if (!user.validPassword(password)){
          return done(null, false,  { message: 'Incorrect userName or Password.'}); 
        }
  
        return done(null, user);
        
      });
    });
  }));

};
