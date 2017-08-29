module.exports = (app, passport) => {
  app.route('/login').get((req, res) => {
      res.render('auth/login', {title:"login page"});
    }); 
  app.post('/login', (req, res, next) => {
    req.checkBody('username', 'username is required').notEmpty(); 
    req.checkBody('password', 'password is required').notEmpty(); 
    
    //Trim and escape the name field. 
    req.sanitize('username').escape();
    req.sanitize('username').trim();
    req.sanitize('password').escape();
    req.sanitize('password').trim();
    //Run the validators
    let errors = req.validationErrors();
    console.log('my login', errors);
    if (errors) {
      return res.status(200).json({success: false, errors});
    }

    passport.authenticate('local-login', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (user) {
        req.login(user, (err) => {
          if ( err ){
              return res.status(200).json({success: false});
          } else {
              return res.status(200).json({success: true});
          }
        });
      } else {
          return res.status(200).json( Object.assign({success: false, info}));
      }
    })(req, res, next);
  });

  app.route('/signup').get((req, res) => {
      res.render('auth/signup', {title: 'Signup page'});
    }); 
  app.post('/signup', (req, res, next) => {
    //Check that the name field is not empty
/*    req.checkBody('username', 'username is required').notEmpty(); 
    req.checkBody('password', 'password is required').notEmpty(); 
    
    //Trim and escape the name field. 
    req.sanitize('username').escape();
    req.sanitize('password').trim();
    
    //Run the validators
    let errors = req.validationErrors();
    if (errors) {
      return res.status(200).json(Object.assign({success: false, errors}));
    }
*/
    passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (user) {
        req.login(user, (err) => {
          if ( err ){
              return res.status(200).json({success: false});
          } else {
            const newUser = { username: user.username, id: user._id };
            return res.status(200).json(Object.assign({success: true, user: newUser}));
          }
        });      
      } else {
          return res.status(200).json(Object.assign({success: false, info}));
      }
    })(req, res, next);
  });

  app.route('/logout')
    .post((req, res) => {
      req.logout();
      return res.status(200).json({success: true});
    }); 

  app.route('/isauth')
  .get((req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).json({
          userid: req.user.userid,
          username : req.user.username,
      });
    } else {
      res.status(200).json({
          userid: null,
          username : null,
      });
    }
  }); 

};

