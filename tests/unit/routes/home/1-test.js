import { moduleFor, test } from 'ember-qunit';

moduleFor('route:home/1', 'Unit | Route | home/1', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
