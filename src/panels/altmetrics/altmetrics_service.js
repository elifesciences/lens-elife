var util = require("substance-util");

var AltmetricsService = function() {

};

AltmetricsService.Prototype = function() {

  // Get all key references for a particular article
  // ---------------
  //

  this.getAltmetrics = function(articleDOI, cb) {
    console.log('fetching altmetrics for', articleDOI);

    // TODO query for:
    // http://api.altmetric.com/v1/doi/10.7554/eLife.00005
    window.setTimeout(function() {
      cb(null, {
        twitter_mentions: 201
      });
    }, 1000);
  };

};

AltmetricsService.prototype = new AltmetricsService.Prototype();

var __instance__ = null;
AltmetricsService.instance = function() {
  if (!__instance__) __instance__ = new AltmetricsService();
  return __instance__;
};

module.exports = AltmetricsService;