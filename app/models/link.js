import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  search: DS.attr('string'),
  name: DS.attr('string')
});