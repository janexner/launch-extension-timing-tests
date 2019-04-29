'use strict';

turbine.logger.info('testAction module loading...');

module.exports = function(settings, event) {
  turbine.logger.info('Test Action fired for rule ' + event.$rule.name + '.');
};
