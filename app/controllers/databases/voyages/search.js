import Ember from 'ember';

export default Ember.Controller.extend({

  _fromYear: SEARCH_MIN_YEAR,
  _toYear: SEARCH_MAX_YEAR,
  _currentSearchObj: null,
  fromYear: SEARCH_MIN_YEAR,
  toYear: SEARCH_MAX_YEAR,

  isBetween: Ember.computed("option", function(){
    return this.get("option") === "is between";
  }),
  fromLabel: Ember.computed("option", function(){
    return this.get("isBetween") ? "starting VIN" : "VIN";
  }),

  toLabel: Ember.computed("option", function(){
    return this.get("isBetween") ? "ending VIN" : "VIN";
  }),

  fieldRequired: Ember.computed("option", function(){
    return this.get("isBetween") ? true : false;
  }),

  actions: {
    executeSearch: function(){
    },

    applyYearRange: function(){
      var fromYear = this.get("fromYear");
      var toYear = this.get("toYear");
      debugger
      var activeSearchTerms = jQuery.map($('#current_search').val(), function(id) {
        debugger;
				var term = searchTermsDict[id];
				// Here we allow custom search types to generate their backend terms.
				var backendSearchTerm = term.hasOwnProperty('getBackendSearchTerm')
					? term.getBackendSearchTerm()
					: term.getSearchTerm();
				return { varName: term.varName, op: term.operatorLabel, searchTerm: backendSearchTerm };
			});
      debugger;
      activeSearchTerms.push({varName: YEAR_RANGE_VARNAME, op: 'is between', searchTerm: [fromYear, toYear]});
      currentSearchObj = {items: activeSearchTerms, orderBy: []};
      this.set("_fromYear", fromYear);
      this.set("_toYear", toYear);
      this.get("voyagesSearch").updateSearch(currentSearchObj);
    },

  
  }
});
