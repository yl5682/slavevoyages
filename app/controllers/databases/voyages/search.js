import Ember from 'ember';

export default Ember.Controller.extend({

  _fromYear: SEARCH_MIN_YEAR,
  _toYear: SEARCH_MAX_YEAR,
  _currentSearchObj: "null",
  fromYear: SEARCH_MIN_YEAR,
  toYear: SEARCH_MAX_YEAR,

  actions: {
    executeSearch: function(){
    },

    applyYearRange: function(){
      var fromYear = this.get("fromYear");
      var toYear = this.get("toYear");

      var activeSearchTerms = jQuery.map($('#current_search').val(), function(id) {
				var term = searchTermsDict[id];
				// Here we allow custom search types to generate their backend terms.
				var backendSearchTerm = term.hasOwnProperty('getBackendSearchTerm')
					? term.getBackendSearchTerm()
					: term.getSearchTerm();
				return { varName: term.varName, op: term.operatorLabel, searchTerm: backendSearchTerm };
			});

      activeSearchTerms.push({varName: YEAR_RANGE_VARNAME, op: 'is between', searchTerm: [fromYear, toYear]});
      currentSearchObj = {items: activeSearchTerms, orderBy: []};
      this.set("_fromYear", fromYear);
      this.set("_toYear", toYear);
      this.get("voyagesSearch").updateSearch(currentSearchObj);
      // alert(`from ${fromYear} to ${toYear}`);
      // alert(`${activeSearchTerms}`);
    }
  }
});
