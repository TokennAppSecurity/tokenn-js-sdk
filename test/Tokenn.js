let tape = require('tape');
let Tokenn = require('../index').Tokenn;
let is = require('is');

// my registered app on tokenn
let tokennAppId = 'JAGlFKoNTP';
let tokennApiKey = '8a3283b1179d71f634c6d015ebfd6595';

// one of the apps that can access my app's api
let testAppId = 'wvpIDDDrKr';
let testAppsRegisteredAppApiKey = 'a56af5e3833b40b11e6ebe41706a8fe4';

tape('Tokenn', (t) => {

  t.ok(is.function(Tokenn), 'Tokenn is a function (object)');


  t.test('# initialize', function (t) {
    t.ok(is.function(Tokenn.initialize), 'is a function');

    t.doesNotThrow(function () {
      Tokenn.initialize(tokennAppId, tokennApiKey);
    }, "initialization does not throw");
    t.end();
  })

  t.test('# validateApiKey', function (t) {
    t.ok(is.function(Tokenn.validateApiKey), "is a function");

    Tokenn.validateApiKey(testAppId, testAppsRegisteredAppApiKey)
      .then((validity) => {
        t.true(validity.valid, 'test apikey is valid');
        t.end();
      }, e => {
        t.error(e);
        t.end();
      })

  })

  t.end();
})