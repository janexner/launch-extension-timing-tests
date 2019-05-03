'use strict';

turbine.logger.info('testEventDelayed module loading...');
window.ags055 = {}
window.ags055.loadTime = new Date();

module.exports = function(settings, trigger) {
  turbine.logger.info('Starting 10s timer for Test Event Delayed...');
  window.ags055.startTime = new Date();
  setTimeout(function() {
    turbine.logger.info('Test Event Delayed triggering...');
    window.ags055.triggerTime = new Date();
    trigger();
    var intLoad = (window.ags055.triggerTime - window.ags055.loadTime) / 1000;
    var intStart = (window.ags055.triggerTime - window.ags055.startTime) / 1000;
    turbine.logger.info('Delayed Timer timings: ', intLoad, 's since init, ', intStart, 's since start.');
  }, 10 * 1000);
};
