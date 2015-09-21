import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Proyecto', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /proyectos without data', function(assert) {
  visit('/proyectos');

  andThen(function() {
    assert.equal(currentPath(), 'proyectos.index');
    assert.equal(find('#blankslate').text().trim(), 'No Proyectos found');
  });
});

test('visiting /proyectos with data', function(assert) {
  server.create('proyecto');
  visit('/proyectos');

  andThen(function() {
    assert.equal(currentPath(), 'proyectos.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new proyecto', function(assert) {
  visit('/proyectos');
  click('a:contains(New Proyecto)');

  andThen(function() {
    assert.equal(currentPath(), 'proyectos.new');


    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing proyecto', function(assert) {
  server.create('proyecto');
  visit('/proyectos');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'proyectos.edit');


    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing proyecto', function(assert) {
  server.create('proyecto');
  visit('/proyectos');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'proyectos.show');

  });
});

test('delete a proyecto', function(assert) {
  server.create('proyecto');
  visit('/proyectos');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'proyectos.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
