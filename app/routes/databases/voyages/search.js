import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
    this.transitionTo('databases.voyages.search.results');
  },

  actions: {
    executeSearch: function(){
    }
  }
});
