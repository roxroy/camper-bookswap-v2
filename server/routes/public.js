module.exports.index = (req, res) => {
  res.render('public/index', {title:"home page"});
};

module.exports.about = (req, res) => {
  res.render('public/about', {title:"about page"});
};