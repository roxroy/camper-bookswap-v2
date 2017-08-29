const publicRoutes = require('./public');
const authRoutes = require('./auth');

module.exports = (app, passport) => {
  app.get('/', publicRoutes.index);
  app.get('/about', publicRoutes.about);

  authRoutes(app, passport);
}
