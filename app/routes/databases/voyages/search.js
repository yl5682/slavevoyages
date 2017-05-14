import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
    this.transitionTo('databases.voyages.search.results');
  },

  actions: {
    executeSearch: function(){
    },

    basicSubmitAction: function(){
      var fromYear = this.get("fromYear");
      var toYear = this.get("toYear");

      alert(`from ${fromYear} to ${toYear}`);
    }
  }
});
