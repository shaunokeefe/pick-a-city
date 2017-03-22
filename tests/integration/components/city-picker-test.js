import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('city-picker', 'Integration | Component | city picker', {
  integration: true
});

test('it renders', function(assert) {
  this.set('cities', [{ name: 'foo'}, { name: 'bar'}]);
  this.render(hbs`{{city-picker cities=cities}}`);
  assert.equal(this.$('.city-picker button').length, 2, 'should render 1 button per city');
});
