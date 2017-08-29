const authFormHandler = require("./authFormHandler");

const setHandlers = () => {
	console.log('form handler');
  authFormHandler.setHandlers();
}

module.exports = {
  setHandlers,
}