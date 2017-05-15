import Ember from 'ember';

export default Ember.Component.extend({

  voyagesSearch: Ember.inject.service(),
  fieldId: "voyage_id",
  options: ['equals', 'is at most', 'is at least', 'is between'],
  option: 'equals',
  fromVid: null,
  toVid: null,
  isBetween: Ember.computed("option", function(){
    return this.get("option") === "is between";
  }),
  fromLabel: Ember.computed("option", function(){
    return this.get("isBetween") ? "Starting Voyage ID" : "Voyage ID";
  }),

  toLabel: Ember.computed("option", function(){
    return this.get("isBetween") ? "Ending Voyage ID" : "Voyage ID";
  }),

  fieldRequired: Ember.computed("option", function(){
    return this.get("isBetween") ? true : false;
  }),

  actions: {
    applyVid: function(){
      var fieldId = this.get("fieldId");
      var op = this.get("option");

      var activeSearchTerms = {
        varName: fieldId,
        op: op,
        searchTerm: [parseInt(this.get("fromVid")), parseInt(this.get("toVid"))]
      };

      this.get("voyagesSearch").updateSearch(activeSearchTerms);
    }
  }
});
