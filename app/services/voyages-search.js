import Ember from 'ember';

export default Ember.Service.extend({

  items: null,
  hasChanged: false,

  // final search object
  currentSearchObj: Ember.computed("activeSearchTerms", function(){
    var newSearchObj = {items: this.get("activeSearchTerms"), orderBy: []}
    currentSearchObj = newSearchObj;
    return newSearchObj;
  }),

  // collection of search params
  activeSearchTerms: [{ // required for all searches
    varName: YEAR_RANGE_VARNAME,
    op: 'is between',
    searchTerm: [SEARCH_MIN_YEAR, SEARCH_MAX_YEAR]
  }],

  // stringified version of the search object
  readable: Ember.computed("currentSearchObj", function(){
    var currentSearchObj = this.get("currentSearchObj");
    if (Object.keys(currentSearchObj).length === 0) {
      return "Showing all results without filters";
    } else {
      return JSON.stringify(this.get('currentSearchObj'));
    }
  }),

  init() {
    this.set('items', ["helloworld"]);
  },

  updateSearch(newSearchTerms) {
    var activeSearchTerms = JSON.parse(JSON.stringify(this.get("activeSearchTerms")));
    var exists = false;
    for (var i = 0; i < activeSearchTerms.length; i++) {
        if (activeSearchTerms[i].varName === newSearchTerms.varName) {
          exists = true;
            activeSearchTerms[i].varName = newSearchTerms.varName;
            activeSearchTerms[i].op = newSearchTerms.op;
            activeSearchTerms[i].searchTerm = newSearchTerms.searchTerm;
            break;
        }
    }
    if (exists) { // update
      this.set("activeSearchTerms", activeSearchTerms);
    } else {
      activeSearchTerms.push(newSearchTerms);
      this.set("activeSearchTerms", activeSearchTerms);
    }
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').setObjects([]);
  }

});
