import Ember from 'ember';

export default Ember.Route.extend({
  // setupController() {
  //   this.controllerFor("databases.voyages.search").set(fromYear, SEARCH_MIN_YEAR);
  //   this.controllerFor("databases.voyages.search").set(toYear, SEARCH_MAX_YEAR);
  // },
  redirect: function () {
    this.transitionTo('databases.voyages.search.results');
  },

  actions: {
    executeSearch: function(){
    }
  }
});
