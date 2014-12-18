"use strict";

var ReferencesRenderer = require("./references_renderer");
var articleDataService = require('../article_data_service').instance();
var ContainerPanel = require('lens').ContainerPanel;

var panel = new ContainerPanel({
  type: 'resource',
  name: 'citations',
  container: 'citations',
  label: 'References',
  title: 'References',
  icon: 'icon-link',
  references: ['citation_reference'],
  createViewFactory: function(doc, options) {
    return new ReferencesRenderer(doc, options, articleDataService);
  }
});

module.exports = panel;