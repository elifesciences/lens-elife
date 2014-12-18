var PanelView = require('lens').PanelView;

var AltmetricsView = function(panelCtrl, config, articleDataService) {
  PanelView.call(this, panelCtrl, config);

  // TODO: this should not have class 'surface'
  this.$el.addClass('surface related_articles');

  // Hide toggle on contruction, it will be displayed once data has arrived
  // this.hideToggle();
  // this.$el.append(this.$content);
};

AltmetricsView.Prototype = function() {

  this.render = function() {

    console.log('rendering...');
    // this.$content.empty();
    // var doi = this.getDocument().get('publication_info').doi;

    // var self = this;
    // this.articleDataService.getRelatedArticles(doi, function(err, rels) {
    //   if (err) {
    //     console.error("Could not retrieve related articles:", err);
    //     return;
    //   }
    //   if (rels && rels.length > 0) self.renderRelatedArticles(rels);
    // });
    this.controller.getAltmetrics();

    this.el.innerHTML = 'Altmetrics go here';
    return this;
  };

  this.renderAltmetrics = function(rels) {
    this.showToggle();

    // for (var i = 0; i < rels.length; i++) {
    //   var rel = rels[i];
    //   var view = new ArticleRelationshipView(rel);
    //   this.$content[0].appendChild(view.render().el);
    // }
  };
};

AltmetricsView.Prototype.prototype = PanelView.prototype;
AltmetricsView.prototype = new AltmetricsView.Prototype();
AltmetricsView.prototype.constructor = AltmetricsView;

module.exports = AltmetricsView;