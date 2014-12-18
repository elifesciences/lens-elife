var KeyReferenceExtension = function(citationView, keyRefRelationship) {
  this.citationView = citationView;
  this.keyRefRelationship = keyRefRelationship;
};

KeyReferenceExtension.Prototype = function() {

  this.render = function() {
    var $content = this.citationView.$el.find('.content');
    var $keyRefEl = $content.find('.key-reference');
    if ($keyRefEl.length === 0) {
      $keyRefEl = $('<div>').addClass('key-reference');
      $content[0].appendChild($keyRefEl[0]);
    }
    $keyRefEl.empty();

    var $creatorEl = $('<div>').addClass('creator');
    $creatorEl.text("Recommended by " +(this.keyRefRelationship.creator || "Author"));

    var $descrEl = $('<div>').addClass('description');
    $descrEl.html(this.keyRefRelationship.description);


    $keyRefEl.append($creatorEl);
    $keyRefEl.append($descrEl);
  };
};

KeyReferenceExtension.prototype = new KeyReferenceExtension.Prototype();

module.exports = KeyReferenceExtension;