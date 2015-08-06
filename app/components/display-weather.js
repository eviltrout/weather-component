import Ember from 'ember';

const CELSIUS = "C";
const FAHRENHEIT = "F";

export default Ember.Component.extend({
  classNames: ['display-weather'],
  displayAs: CELSIUS,

  displayingC: Ember.computed.equal('displayAs', CELSIUS),
  displayingF: Ember.computed.equal('displayAs', FAHRENHEIT),

  celsius: Ember.computed('kelvin', function() {
    return parseFloat(this.get('kelvin')) - 273.15;
  }),

  fahrenheit: Ember.computed('kelvin', function() {
    return parseFloat(this.get('kelvin')) * (9/5) - 459.67;
  }),

  displayType: Ember.computed('displayAs', function() {
    return this.get('displayAs') === CELSIUS ? 'C' : 'F';
  }),

  displayTemp: Ember.computed('celsius', 'displayAs', function() {
    if (this.get('displayAs') === CELSIUS) {
      return this.get('celsius').toFixed(1);
    } else {
      return this.get('fahrenheit').toFixed(1);
    }
  }),

  actions: {
    showCelsius() {
      this.set('displayAs', CELSIUS);
      this.sendAction('unitChangedAction', FAHRENHEIT);
    },

    showFahrenheit() {
      this.set('displayAs', FAHRENHEIT);
      this.sendAction('unitChangedAction', FAHRENHEIT);
    },
  }
});
