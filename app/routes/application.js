import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({
  model(/* params */) {
    return RSVP.all([
      this.store.createRecord('city', {
        id: 'mel',
        name: 'Melbourne',
        state: 'Victoria',
        thumbnailUrl: '/images/mel.jpg'
      }).save(),
      this.store.createRecord('city', {
        id: 'syd',
        name: 'Sydney',
        state: 'New South Wales',
        thumbnailUrl: '/images/syd.jpg'
      }).save(),
      this.store.createRecord('city', {
        id: 'goldcoast',
        name: 'Gold Coast',
        state: 'Queensland',
        thumbnailUrl: '/images/goldcoast.jpg'
      }).save()
    ]);
  }
});
