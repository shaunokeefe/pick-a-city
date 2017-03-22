## Code Challenge

Using this EmberJS repo, build a simple app for selecting a city and displaying a map.

If this is your first time working with EmberJS, it's recommended you read [the excellent Ember Guides](https://guides.emberjs.com/v2.12.0/getting-started/quick-start/). This will walk you through setting up Ember CLI, and the different concepts in Ember (such as components, models, routes, etc).

#### Feature Spec

- the app loads an index page which allows the user to select 1 of 3 cities - Melbourne, Sydney, or Gold Coast
- the city selection is encapsulated in a `<city-picker>` component, which renders 1 button per city
- selecting a city will transition to a `/cities/:cityId` route
- the city route will display a label, like `Melbourne - Victoria`, and a map thumbnail image
- the logic for each city is encapsulated in a model

The app is preloaded with 3 city records - Melbourne, Sydney and Gold Coast. See the `model()` method in `app/routes/application`.

Your implementation should pass the test suite, which can be run using `ember test --server`.

#### Design Spec

Style the page according to the [Material Design system](https://material.io), so that:  

- all typography uses the [Roboto font](https://fonts.google.com/specimen/Roboto)
- the city picker buttons are [Material raised buttons](https://material.io/guidelines/components/buttons.html#buttons-button-types) with a primary colour of #34C981
- the city label and image are displayed on a [Material card](https://material.io/guidelines/components/cards.html#cards-usage)
- the city card is horizontally and vertically aligned in the centre of the viewport
- the city thumbnail image is never wider than the browser viewport

Beyond those requirements, you are free to style the rest of the page as you wish.

## Working with Ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd pick-a-city`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
