import Ember from 'ember';

export default Ember.Service.extend({

  items: {"cdromChecked": false},

  init() {
    this._super(...arguments);
    this.set('items', {"cdromChecked": false});
  },

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').setObjects([]);
  },

  toggle(item) {
    debugger;
    var modifiedState = !this.get('items').cdromChecked;
    this.set('items', {"cdromChecked": modifiedState});
  },

});
