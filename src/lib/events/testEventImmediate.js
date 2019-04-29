'use strict';

turbine.logger.info('testEventImmediate module loading...');

module.exports = function(settings, trigger) {
  turbine.logger.info('Test Event Immediate triggering...');
  trigger();
};
