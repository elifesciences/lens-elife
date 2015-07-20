"use strict";

var Lens = require("lens/reader");
var panels = Lens.getDefaultPanels();
  
// All available converters
var LensConverter = require("lens/converter");
var ElifeConverter = require("lens/converter/elife_converter");

var LensApp = function(config) {
  Lens.call(this, config);
};

LensApp.Prototype = function() {

  // Custom converters
  // --------------
  // 
  // Provides a sequence of converter instances
  // Converter.match will be called on each instance with the
  // XML document to processed. The one that returns true first
  // will be chosen. You can change the order to prioritize
  // converters over others

  this.getConverters = function(converterOptions) {
    return [
      new ElifeConverter(converterOptions),
      new LensConverter(converterOptions)
    ]
  };

  // Custom panels
  // --------------
  // 

  this.getPanels = function() {
    return panels.slice(0);
  };
};

LensApp.Prototype.prototype = Lens.prototype;
LensApp.prototype = new LensApp.Prototype();
LensApp.prototype.constructor = LensApp;

module.exports = LensApp;