import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cats', {path: 'all-the-cats'}, function() {
      this.route('cat', {path: ':cat_id'});
  });
  this.route('about');
  this.route('faq');
  this.route('drop');
});

export default Router;
