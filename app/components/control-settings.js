import Ember from 'ember';

export default Ember.Component.extend({
  filter: Ember.inject.service("voyagesSearch"),

  didRender: function(){
    var filter = this.get("filter");
    var currentToggle = this.get("filter").get("showAdvanced");
    this.set('showAdvanced', currentToggle);
  },

  actions: {
    toggle: function(){
      var filter = this.get("filter");
      var currentToggle = this.get("filter").get("showAdvanced");
      filter.set("showAdvanced", !currentToggle);
      this.set('showAdvanced', !currentToggle);
    },
  }


});
