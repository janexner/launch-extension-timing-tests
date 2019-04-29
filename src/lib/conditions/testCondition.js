'use strict';

turbine.logger.info('testCondition module loading...');

module.exports = function(settings, event) {
  turbine.logger.info('Test Condition evaluation for rule ' + event.$rule.name + ', returning true...');
  return true;
};
