var PanelView = require('lens').PanelView;
var ArticleRelationshipView = require('./article_relationship_view');

var RelatedArticlesView = function(panelCtrl, config, articleDataService) {
  PanelView.call(this, panelCtrl, config);

  this.articleDataService = articleDataService;

  this.$content = $('<div>').addClass('nodes');
  // TODO: this should not have class 'surface'
  this.$el.addClass('surface related_articles');

  // Hide toggle on contruction, it will be displayed once data has arrived
  this.hideToggle();
  this.$el.append(this.$content);
};

RelatedArticlesView.Prototype = function() {

  this.render = function() {
    this.$content.empty();
    var doi = this.getDocument().get('publication_info').doi;

    var self = this;
    this.articleDataService.getRelatedArticles(doi, function(err, rels) {
      if (err) {
        console.error("Could not retrieve related articles:", err);
        return;
      }
      if (rels && rels.length > 0) self.renderRelatedArticles(rels);
    });
    return this;
  };

  this.renderRelatedArticles = function(rels) {
    this.showToggle();
    for (var i = 0; i < rels.length; i++) {
      var rel = rels[i];
      var view = new ArticleRelationshipView(rel);
      this.$content[0].appendChild(view.render().el);
    }
  };
};

RelatedArticlesView.Prototype.prototype = PanelView.prototype;
RelatedArticlesView.prototype = new RelatedArticlesView.Prototype();
RelatedArticlesView.prototype.constructor = RelatedArticlesView;

module.exports = RelatedArticlesView;