// Request Django credentials for the user
// @param options {optional}
// @param credentialRequestCompleteCallback {Function} Callback function to call on
//   completion. Takes one argument, credentialToken on success, or Error on
//   error.
Django.requestCredential = function (options, credentialRequestCompleteCallback) {
  // support both (options, callback) and (callback).
  if (!credentialRequestCompleteCallback && typeof options === 'function') {
    credentialRequestCompleteCallback = options;
    options = {};
  }

  var config = ServiceConfiguration.configurations.findOne({service: 'django'});
  if (!config) {
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError("Service not configured"));
    return;
  }

  var credentialToken = Random.id();

  var scope = [];
  if (options && options.requestPermissions) {
    scope = options.requestPermissions.join('+');
  }

  var loginUrl =
        config.loginUrl +
        '?client_id=' + encodeURIComponent(config.clientId) +
        '&redirect_uri=' + encodeURIComponent(Meteor.absoluteUrl('_oauth/django?close')) +
        '&state=' + credentialToken +
        '&response_type=code';

  Oauth.initiateLogin(credentialToken, loginUrl, credentialRequestCompleteCallback);
};
