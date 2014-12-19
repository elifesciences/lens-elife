var PanelController = require("lens").PanelController;
var AltmetricsView = require("./altmetrics_view");

var AltmetricsController = function(document, config) {
  PanelController.call(this, document, config);
};

AltmetricsController.Prototype = function() {
  this.createView = function() {
    return new AltmetricsView(this, this.config);
  };

  this.getAltmetrics = function(cb) {
    var doi = this.document.get('publication_info').doi;

		$.ajax({
		  url: "http://api.altmetric.com/v1/doi/"+doi,
		  dataType: "json",
		}).done(function(res) {
			cb(null, res);
		});
  };
};

AltmetricsController.Prototype.prototype = PanelController.prototype;
AltmetricsController.prototype = new AltmetricsController.Prototype();

module.exports = AltmetricsController;