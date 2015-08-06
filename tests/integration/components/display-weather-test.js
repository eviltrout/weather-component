import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('display-weather', { integration: true });

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{display-weather city="Toronto" kelvin="298"}}`);

  assert.equal(this.$('.temperature .value').text(), '24.9');

  this.$('button.show-f').click();
  assert.equal(this.$('.temperature .value').text(), '76.7');
});

test('it respects the city', function(assert) {
  assert.expect(2);

  this.set('currentCity', 'Toronto');
  this.render(hbs`{{display-weather city=currentCity kelvin="298"}}`);

  assert.equal(this.$('.city').text(), 'Toronto');

  this.set('currentCity', 'Montreal');
  assert.equal(this.$('.city').text(), 'Montreal');
});

test('it triggers the action', function(assert) {
  assert.expect(1);

  this.on('unitChanged', function(unit) {
    assert.equal(unit, 'F');
  });

  this.render(hbs`{{display-weather city="Toronto"
                                    kelvin="298"
                                    unitChangedAction="unitChanged"}}`);

  this.$('button.show-f').click();
});
