var NodeModel = Backbone.Model.extend({
  initialize: function(attributes) {
    this.children = new NodeCollection(attributes.children);
  },

  sync: function() {
    return false;
  }
});
