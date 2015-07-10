var NodeModel = Backbone.Model.extend({
  initialize: function(attributes) {
    this.children = new NodeCollection(attributes.children);
  },

  sync: function() {
    return false;
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    _.each(json, function(value, name) {
      value && _.isFunction(value.toJSON) && (json[name] = value.toJSON());
    });

    var children = [];
    _.each(this.children.models, function(child) {
      children.push(child.toJSON());
    });

    json['children'] = children;
    return json;
  }
});
