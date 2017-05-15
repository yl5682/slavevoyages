import Ember from 'ember';

export default Ember.Controller.extend({

  _fromYear: SEARCH_MIN_YEAR,
  _toYear: SEARCH_MAX_YEAR,
  _currentSearchObj: null,
  fromYear: SEARCH_MIN_YEAR,
  toYear: SEARCH_MAX_YEAR,
  
  actions: {
  }
});
