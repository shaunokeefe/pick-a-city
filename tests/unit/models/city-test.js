import { moduleForModel, test } from 'ember-qunit';

moduleForModel('city', 'Unit | Model | city', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('it computes a city label', function(assert) {
  let model = this.subject({ name: 'Adelaide', state: 'South Australia' });
  assert.equal(model.get('label'), 'Adelaide - South Australia');
});
