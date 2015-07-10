var NodeCollection = Backbone.Collection.extend({
  model: NodeModel,

  sync: function() {
    return false;
  }
})
