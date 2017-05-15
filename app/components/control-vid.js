import Ember from 'ember';

export default Ember.Component.extend({

  voyagesSearch: Ember.inject.service(),
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
      var filterId = "voyage_id";

      var term = searchTermsDict[filterId];
      // Here we allow custom search types to generate their backend terms.
      var backendSearchTerm = term.hasOwnProperty('getBackendSearchTerm')
        ? term.getBackendSearchTerm()
        : term.getSearchTerm();

      var activeSearchTerms = [{
        varName: term.varName,
        op: this.get("option"),
        searchTerm: [this.get("fromVid"), this.get("toVid")]
      }];
      // var activeSearchTerms = {
      //   varName: term.varName,
      //   op: term.operatorLabel,
      //   searchTerm: backendSearchTerm
      // };

      // TODO: Update to be using the filter
      var fromYear = 1745;
      var toYear = 1861;

      activeSearchTerms.push({varName: YEAR_RANGE_VARNAME, op: 'is between', searchTerm: [fromYear, toYear]});
      currentSearchObj = {items: activeSearchTerms, orderBy: []};
      this.get("voyagesSearch").updateSearch(currentSearchObj);
    }
  }
});
