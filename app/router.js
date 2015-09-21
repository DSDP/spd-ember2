import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");

  this.route('proyectos', { path: '/proyectos' }, function() {
    this.route('new');
    this.route('edit', { path: ':proyectos_id/edit' });
    this.route('show', { path: ':proyectos_id' });
  });
});

export default Router;