Package.describe({
  summary: "Provides framework7."
});

Package.on_use(function (api) {

  api.add_files('fw7/css/framework7.css', 'client');
  api.add_files('fw7/js/framework7.js', 'client');

  api.add_files([
    'fw7/img/i-f7.png',
    'fw7/img/i-form-calendar.png',
    'fw7/img/i-form-checkbox-black.png',
    'fw7/img/i-form-checkbox-blue.png',
    'fw7/img/i-form-checkbox-white.png',
    'fw7/img/i-form-comment.png',
    'fw7/img/i-form-email.png',
    'fw7/img/i-form-gender.png',
    'fw7/img/i-form-name.png',
    'fw7/img/i-form-password.png',
    'fw7/img/i-form-radio-black.png',
    'fw7/img/i-form-radio-blue.png',
    'fw7/img/i-form-radio-white.png',
    'fw7/img/i-form-settings.png',
    'fw7/img/i-form-tel.png',
    'fw7/img/i-form-toggle.png',
    'fw7/img/i-form-url.png'
    ], 'client');

});