import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import moduleTests from 'ember-addon/test-support/test-functions/acceptance/index';

module('Acceptance | Index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  
  moduleTests.forEach(item => {
    test(item.title, item.testFunction);
  });
});


