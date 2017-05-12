import Ember from 'ember';

export default Ember.Route.extend({

  setupController() {
    let routeName = this.get("routeName");
    if (routeName == "application") {
      this.controllerFor('application').set('isIndexPage', true);
    } else {
      this.controllerFor('application').set('isIndexPage', false);
    }

  }

});
