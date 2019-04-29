'use strict';

turbine.logger.info('testEventDelayed module loading...');

module.exports = function(settings, trigger) {
  turbine.logger.info('Starting 10s timer for Test Event Delayed...');
  setTimeout(function() {
    turbine.logger.info('Test Event Delayed triggering...');
    trigger();
  }, 10 * 1000);
};
