import { test } from 'qunit';
import moduleForAcceptance from 'pick-a-city/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | cities');

test('visiting /cities', function(assert) {
  visit('/cities/mel');

  andThen(function() {
    assert.equal(find('.city-headline').text(), 'Melbourne - Victoria', 'should render header that concatenates city name and state');
    assert.equal(find('.city-thumbnail').attr('src'), '/images/mel.jpg', 'should render map thumbnail');
  });
});
