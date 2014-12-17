"use strict";

var PanelController = require("lens").PanelController;
var RelatedArticlesView = require('./related_articles_view');

var RelatedArticlesController = function(document, config, articleDataService) {
  this.document = document;
  this.config = config;
  this.articleDataService = articleDataService;
};

RelatedArticlesController.Prototype = function() {
  this.createView = function() {
    return new RelatedArticlesView(this, this.config, this.articleDataService);
  };
};

RelatedArticlesController.Prototype.prototype = PanelController.prototype;
RelatedArticlesController.prototype = new RelatedArticlesController.Prototype();

module.exports = RelatedArticlesController;