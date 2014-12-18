"use strict";

var Panel = require('lens').Panel;
var altmetricsService = require('./altmetrics_service').instance();
var AltmetricsController = require('./altmetrics_controller');

var panel = new Panel({
  type: 'resource',
  label: 'Altmetrics',
  title: 'Altmetrics',
  icon: 'icon-external-link',
});

panel.createController = function(doc) {
  return new AltmetricsController(doc, this.config, altmetricsService);
};

module.exports = panel;