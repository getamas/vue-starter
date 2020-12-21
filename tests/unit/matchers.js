const _ = require('lodash')
const customMatchers = {}

customMatchers.toBeAComponent = function(options) {
  if (isAComponent()) {
    return {
      message: () => `expected ${this.utils.printReceived(options)} not to be a Vue component`,
      pass: true
    }
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(options)} to be a valid Vue component, exported from a .vue file`,
      pass: false
    }
  }

  function isAComponent() {
    return _.isPlainObject(options) && typeof options.render === 'function'
  }
}

customMatchers.toBeAViewComponent = function(options) {
  if (options.components && options.components.Layout) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          options
        )} not to register a local Layout component nor define a page title and meta description`,
      pass: true
    }
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          options
        )} to register a local Layout component and define a page title and meta description`,
      pass: false
    }
  }
}

customMatchers.toBeAVuexModule = function(options) {
  if (isAVuexModule()) {
    return {
      message: () => `expected ${this.utils.printReceived(options)} not to be a Vuex module`,
      pass: true
    }
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          options
        )} to be a valid Vuex module, include state, getters, mutations, and actions`,
      pass: false
    }
  }

  function isAVuexModule() {
    return (
      _.isPlainObject(options) &&
      _.isPlainObject(options.state) &&
      _.isPlainObject(options.getters) &&
      _.isPlainObject(options.mutations) &&
      _.isPlainObject(options.actions)
    )
  }
}

global.expect.extend(customMatchers)
