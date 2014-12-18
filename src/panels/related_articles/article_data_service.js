var util = require("substance-util");

var ArticleDataService = function() {
  this.relationships = require('../../../data/relationships');
  this.keyReferences = require('../../../data/key_references');
};

ArticleDataService.Prototype = function() {

  // Get all key references for a particular article
  // ---------------
  //

  this.getKeyReferences = function(articleDOI, refDOI, cb) {
    if (!this.keyReferences[articleDOI]) return cb(null, {});
    var keyRefs = this.keyReferences[articleDOI][refDOI];    
    cb(null, keyRefs);
  };

  // Get all article relationships for a particular DOI
  // ---------------
  //

  this.getRelatedArticles = function(doi, cb) {
    var rels = this.relationships[doi];
    cb(null, rels);
  };
};

ArticleDataService.prototype = new ArticleDataService.Prototype();

var __instance__ = null;
ArticleDataService.instance = function() {
  if (!__instance__) __instance__ = new ArticleDataService();
  return __instance__;
};

module.exports = ArticleDataService;