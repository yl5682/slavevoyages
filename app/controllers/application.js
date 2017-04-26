import Ember from 'ember';

export default Ember.Controller.extend({

  cdromChecked: true,

  exisitingState: Ember.computed('cdromChecked', function() { 
    console.log('exisitingState function is called: ', this.get('cdromChecked'));
  }),

  modifiedState: Ember.observer('cdromChecked', function() { 
    console.log('modifiedState observer is called', this.get('cdromChecked')); 
  }),

  isDisabled: Ember.computed('modifiedState', function() {
    debugger;
    return this.get('modifiedState') === this.get('exisitingState');
  }),

  actions: {
     toggle() {
       alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
       this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
       this.set('emailAddress', '');
     }
   },

});
