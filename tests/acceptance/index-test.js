import { test } from 'qunit';
import moduleForAcceptance from 'pick-a-city/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('can select a city', function(assert) {
  visit('/');

  andThen(function() {
    let $buttons = find('.city-picker-button');
    assert.equal($buttons[0].textContent, 'Melbourne', 'should render button for Melbourne');
    assert.equal($buttons[1].textContent, 'Sydney','should render button for Sydney');
    assert.equal($buttons[2].textContent, 'Gold Coast', 'should render button for Gold Coast');
  });
});


test('selecting a city will transition to correct route', function(assert) {
  visit('/');
  click('.city-picker .city-picker-button:first-of-type')

  andThen(function() {
    assert.equal(currentURL(), '/cities/mel', 'should transition to Melbourne city route');
  });
});
