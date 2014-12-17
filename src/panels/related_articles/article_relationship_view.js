"use strict";

var View = require("substance-application").View;
var $$ = require("substance-application").$$;
var articleUtil = require("lens-article/article_util");

// Lens.ArticleRelationship.View
// ==========================================================================
// Note: this is a custom view, not a NodeView.
// TODO: we might consider to add a CustomView, make it parent to NodeView
//       and put node agnostic implementation there

var ArticleRelationshipView = function(relationShip) {
  View.call(this);
  this.relationShip = relationShip;
  this.$el.attr({id: relationShip.id});
  // TODO: try to get rid of 'content-node' class, as this isn't a view of a document node
  this.$el.addClass("content-node article-relationship");
};

ArticleRelationshipView.Prototype = function() {

  this.render = function() {
    // TODO: implement CustomView and put this there
    this.content = document.createElement("DIV");
    this.content.classList.add("content");
    this.el.appendChild(this.content);

    var relationShip = this.relationShip;

    // Event teaser
    // -------
    var relationshipType = relationShip.relationship_type_name || "Related Article";
    var publishDate = " on "+articleUtil.formatDate(relationShip.related_article.published_on);
    var teaserEl = $$('.relationship-teaser.container', {
      children: [
        $$('span.type.'+relationShip.relationship_type, {text: relationshipType}),
        $$('span.published-on', {text: publishDate}),
      ]
    });

    this.content.appendChild(teaserEl);

    // Authors
    // -------

    this.content.appendChild($$('.authors', { text: relationShip.related_article.authors.join(', ') + " cited this article in" }));

    // Article title
    // -------

    this.content.appendChild($$('.article-title', {
      children: [
        $$('a', {
          target: '_blank',
          href: relationShip.related_article.url,
          html: [relationShip.related_article.title, '<i class="icon-external-link-sign"></i>'].join(' ')
        })
      ]
    }));

    // Relationship statement
    // -------

    this.content.appendChild($$('.statement', {children: [
      $$('.text', { html: relationShip.description }),
      $$('.creator', {text: relationShip.creator})
      // $$('.creator', { html: ["<b>"+this.node.creator+"</b>", new Date(this.node.created_at).toDateString()].join(' on ') })
    ]}));

    return this;
  };
};

ArticleRelationshipView.Prototype.prototype = View.prototype;
ArticleRelationshipView.prototype = new ArticleRelationshipView.Prototype();

module.exports = ArticleRelationshipView;