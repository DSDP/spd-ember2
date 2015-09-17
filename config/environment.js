/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'spd',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['contentSecurityPolicy'] = {
          'default-src': "'none'",
          'script-src': "'self' http://sparlv2/ http://sparlv2:35729",
          'font-src': "'self' http://sparlv2/",
          'connect-src': "'self' https://srv-sparl-5.hcdn.gob.ar:9000 http://sparlv2/ ws://sparlv2:35729",
          'img-src': "'self' http://sparlv2/ http://lorempixel.com",
          'style-src': "'self' http://sparlv2/ 'unsafe-inline'",
          'media-src': "'self' http://sparlv2/"
    };

    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:local-storage',
      crossOriginWhitelist: ['https://10.105.5.55:9000'],
      authorizer: 'simple-auth-authorizer:oauth2-bearer'
    };

    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: 'https://10.105.5.55:9000/o/token/',
      crossOriginWhitelist: ['https://10.105.5.55:9000']
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
