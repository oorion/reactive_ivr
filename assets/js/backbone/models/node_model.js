var NodeModel = Backbone.Model.extend({
  initialize: function(options) {
    console.log(options);
    console.log('log');
    // this.children = new NodeCollection(options.get('children'));
  }
});
