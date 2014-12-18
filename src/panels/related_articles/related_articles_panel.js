"use strict";

var Panel = require('lens').Panel;
var articleDataService = require('./article_data_service').instance();
var RelatedArticlesController = require('./related_articles_controller');

var panel = new Panel({
	name: "related_articles",
  type: 'resource',
  label: 'Related',
  title: 'Related',
  icon: 'icon-external-link',
});

panel.createController = function(doc) {
  return new RelatedArticlesController(doc, this.config, articleDataService);
};

module.exports = panel;