import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this.set("value", this.checked);
  }    

});
