let User = require('../models/user');

const mapItem = (item) => {
  return {
    id : item._id,
    username: item.username,
  }
}

const addNew = (profile, cb) => {
  const newUser = new User();

  newUser.username = profile.username;
  newUser.password = newUser.generateHash(profile.password);

  newUser.save((err) => {
    if (err) {
      throw err;
    }
    cb(newUser);
  });
};

const getOne = (username) => {
  return User.findOne({ 'username': username })
    .exec((err, user) => {
      if (err) {
        throw err;
      }

      if (user) {
        return mapItem(user);
      }
    });
};

module.exports = {
  getOne,
  addNew,
}