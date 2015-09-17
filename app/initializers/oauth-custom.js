import OAuthCustomAuthenticator from '../authenticators/oauth-custom';

export default {
    name: 'oauth-custom',

  initialize: function(registry, application) {
    application.register('oauth-custom:oauth2-password-grant', OAuthCustomAuthenticator);

  	//var session = application.container.lookup('session:custom');
	//session.currentUser = Ember.computed('secure.user_id', function() {})
  }
};