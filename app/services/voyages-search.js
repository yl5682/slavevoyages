import Ember from 'ember';

export default Ember.Service.extend({

  items: null,
  currentSearchObj: {},

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

  updateSearch(newSearchObject) {
    this.set('currentSearchObj', newSearchObject);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').setObjects([]);
  }

});
