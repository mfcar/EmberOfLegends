import EmberRouter from '@ember/routing/router';
import config from 'ember-of-legends/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('status');
  this.route('games', {path: '/featured-games'});
  this.route('leaderboards');
});
