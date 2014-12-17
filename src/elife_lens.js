"use strict";

var Lens = require("lens");
var relatedArticlesPanel = require('./panels/related_articles/related_articles_panel');

var panels = Lens.getDefaultPanels();

// Insert related articles panel at next to last position
panels.splice(-1, 0, relatedArticlesPanel);

var ElifeLens = function(config) {
  Lens.call(this, config);
};

ElifeLens.Prototype = function() {

  this.getPanels = function() {
    return panels.slice(0);
  };

};

ElifeLens.Prototype.prototype = Lens.prototype;
ElifeLens.prototype = new ElifeLens.Prototype();
ElifeLens.prototype.constructor = ElifeLens;

module.exports = ElifeLens;
