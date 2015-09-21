import OAuthCustomAuthenticator from '../authenticators/oauth-custom';

export default {
    name: 'oauth-custom',

  initialize: function(registry, application) {
    application.register('oauth-custom:oauth2-password-grant', OAuthCustomAuthenticator);
  }
};