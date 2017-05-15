import Ember from 'ember';

export default Ember.Component.extend({
  filter: Ember.inject.service("voyagesSearch"),
  fieldId: "ship_name",
  op: "contains",
  label: "Vessel Name",

  actions: {
    applyVesselName: function(){
      var filter = this.get("filter");
      var fieldId = this.get("fieldId");
      var op = this.get("op");
      var vesselName = this.get("vesselName");

      var activeSearchTerms = {
        varName: fieldId,
        op: op,
        searchTerm: vesselName
      };

      filter.updateSearch(activeSearchTerms);

    }
  }
});
