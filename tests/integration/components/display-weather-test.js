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
