'use strict';

module.exports = function(settings, event) {
    turbine.logger.info('Data Element queried', settings, event);
    return "test";
}