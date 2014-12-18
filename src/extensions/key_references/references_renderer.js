var ResourcePanelViewFactory = require('lens').ResourcePanelViewFactory;
var KeyReferenceExtension = require('./key_reference_extension');

var ReferencesRenderer = function(doc, options, articleDataService) {
  ResourcePanelViewFactory.call(this, doc.nodeTypes, options);
  this.doc = doc;
	this.articleDataService = articleDataService;
};

ReferencesRenderer.Prototype = function() {

  this.createView = function(node, options, type) {
    var nodeView = ResourcePanelViewFactory.prototype.createView.call(this, node, options, type);

    var pubInfo = this.doc.get('publication_info');
    var referenceDOI = node.doi;
    var articleDOI = pubInfo.doi;
    // check if there are key references
    this.articleDataService.getKeyReferences(articleDOI, referenceDOI, function(err, keyRefRel) {
    	if (err) {
    		console.error(err);
    		return;
    	}
      if (keyRefRel && Object.keys(keyRefRel).length > 0) {
        var keyRefExt = new KeyReferenceExtension(nodeView, keyRefRel);
        keyRefExt.render();
      }
    });
    return nodeView;
  };
};

ReferencesRenderer.Prototype.prototype = ResourcePanelViewFactory.prototype;
ReferencesRenderer.prototype = new ReferencesRenderer.Prototype();

module.exports = ReferencesRenderer;