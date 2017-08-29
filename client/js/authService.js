  const submitAuth = (user, path) => {
    const body = JSON.stringify(user);
       return new Promise(function(resolve, reject) {  
        fetch(path,
          {
            method: 'POST', credentials: 'include',
            body: body,
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => {
            if (!response.ok) {
              reject(response.json());
            }
            return response.json();
          })
          .then(json => {
            return  resolve(json);
          })
          .catch(e => {
            return reject(new Error(e.statusText))
          })
    });
  }

  const logout = user => {
    return submitAuth({}, '/logout');
  }
  
  const submitLogin = user => {
    return submitAuth(user, '/login');
  }

  const submitSignup = user => {
    return submitAuth(user, '/signup');
  }

  module.exports = {
    submitSignup,
    submitLogin,
    logout,
  }