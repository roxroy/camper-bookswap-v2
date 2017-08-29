const authService = require("./authService");

const showError = (errors) =>{
  const $errorDiv = $('#page-error');

  $errorDiv.removeClass('card-panel teal lighten-2');
  $errorDiv.text('');
  if (errors && errors.length) {
    $errorDiv.addClass('card-panel teal lighten-2');
    let lines = errors.map((item) => {
      return `<li>${item.msg}</li>`
    });
    lines.unshift('<ul>')
    lines.push('</ul>')
    $errorDiv.html(lines.join(''));
  }
}

const setHandlers = () => {
  $('#APP_signup').on('submit', (event) => {
    if (event) event.preventDefault();
    let user = {
      username: $('input[name=username]').val(), 
      password: $('input[name=password]').val()
    };
    
    authService.submitSignup(user)
    .then(signupData => {
      console.log('onSubmit', signupData);
      if (signupData.success) {
        showError(null);
        window.location= '/dashboard';
      } else {
        showError(signupData.errors);
      }
    })
    .catch(e => {
      console.log('onSubmit error', e);
    }); 

  });

  $('#APP_login').on('submit', (event) => {
    if (event) event.preventDefault();
    let user = {
      username: $('input[name=username]').val(), 
      password: $('input[name=password]').val()
    };
    
    authService.submitLogin(user)
    .then(loginData => {
      console.log('onSubmit', loginData);
      if (loginData.success) {
      } else {
        const errors = {};
        errors.username = loginData.info.message;
      }
    })
    .catch(e => {
      console.log('onSubmit error', e);
    }); 

  });
}

module.exports = {
  setHandlers,
}
