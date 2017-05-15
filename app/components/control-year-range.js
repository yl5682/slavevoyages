import Ember from 'ember';

export default Ember.Component.extend({
  filter: Ember.inject.service("voyagesSearch"),
  fieldId: YEAR_RANGE_VARNAME,
  op: "is between",
  fromYear: SEARCH_MIN_YEAR,
  toYear: SEARCH_MAX_YEAR,
  _fromYear: SEARCH_MIN_YEAR,
  _toYear: SEARCH_MAX_YEAR,
  minYear: SEARCH_MIN_YEAR,
  maxYear: SEARCH_MAX_YEAR,

  actions: {
    applyYearRange: function(){
      var fromYear = parseInt(this.get("fromYear"));
      var toYear = parseInt(this.get("toYear"));
      var fieldId = this.get("fieldId");
      var op = this.get("op");
      var activeSearchTerms = {
        varName: fieldId,
        op: op,
        searchTerm: [fromYear, toYear]
      };

      // update properties used for search title
      this.set("_fromYear", fromYear);
      this.set("_toYear", toYear);

      // update search
      this.get("filter").updateSearch(activeSearchTerms);
    },
  }


});
