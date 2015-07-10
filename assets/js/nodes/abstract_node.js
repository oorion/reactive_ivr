var BackboneMixin = {
  componentDidMount: function () {
    // Whenever there may be a change in the Backbone data, trigger a
    // reconcile.
    this.getBackboneCollections().forEach(function (collection) {
      // explicitly bind `null` to `forceUpdate`, as it demands a callback and
      // React validates that it's a function. `collection` events passes
      // additional arguments that are not functions
      collection.on('add remove change', this.forceUpdate.bind(this, null));
    }, this);
  },

  componentWillUnmount: function () {
    // Ensure that we clean up any dangling references when the component is
    // destroyed.
    this.getBackboneCollections().forEach(function (collection) {
      collection.off(null, null, this);
    }, this);
  }
};


app.AbstractNode = React.createClass({
  mixins: [BackboneMixin],

  getBackboneCollections: function () {
    return [this.props.node.children];
  },

  getInitialState: function() {
    return {
      visible: true,
      node_type: this.props.node.get('node_type')
    };
  },

  componentDidMount: function () {
    //var Router = Backbone.Router.extend({
    //  routes: {
    //    '': 'all',
    //    'active': 'active',
    //    'completed': 'completed'
    //  },
    //  all: this.setState.bind(this, {nowShowing: app.ALL_TODOS}),
    //  active: this.setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
    //  completed: this.setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
    //});

    if (this.props.root) {
      //new Router();
      Backbone.history.start();

      //this.props.node.fetch();
    }
  },

  componentDidUpdate: function () {
    // If saving were expensive we'd listen for mutation events on Backbone and
    // do this manually. however, since saving isn't expensive this is an
    // elegant way to keep it reactively up-to-date.
    this.props.node.children.forEach(function (node) {
      node.save();
    });
  },

  handleTypeChange: function(newNodeType) {
    this.setState({
      node_type: newNodeType
    });
  },

  addNode: function() {
    node = {
      "node_type" : "Transfer",
      "prompt" : "",
      "destination" : null,
      "id": (new Date).getTime(),
      "leaf": false,
      "children": []
    }

    this.props.node.children.create(node);
  },

  removeNode: function() {
    this.props.node.destroy();
  },

  render: function() {
    var childNodes;
    var classObj;
    var anyChildren = this.props.node.children.length > 0;

    if (anyChildren) {
      var self = this;
      childNodes = this.props.node.children.map(function(node, index) {
        return <li key={node.get('id')}><app.AbstractNode node={node} keypress={index+1} /></li>
      });

      classObj = {
        togglable: true,
        "togglable-down": this.state.visible,
        "togglable-up": !this.state.visible
      };
    } else {
      classObj = {
        hidden: true
      };
    }

    var style;
    if (!this.state.visible) {
      style = {display: "none"};
    }

    var ViewClass;

    switch(this.state.node_type) {
      case 'Question':
        ViewClass = app.QuestionNode;
        break;

      case 'Transfer':
        ViewClass = app.TransferNode;
        break;

      case 'Hang Up':
        ViewClass = app.HangUpNode;
        break;

      default:
        throw("Unknown ivr node type: " + this.state.node_type);
    }

    return (
      <div>
        <div className={this.state.node_type + " " + "node"}>
          <app.Keypress keypress={this.props.keypress} />
          <app.NodeType active={this.state.node_type} handleTypeChange={this.handleTypeChange} />
          <ViewClass node={this.props.node} />
          <button className="trash-btn" style={{float: "right"}} onClick={this.removeNode}><span className="glyphicon glyphicon-trash trash-glyph"></span></button>
        </div>
        <span className={React.addons.classSet(classObj)} onClick={this.toggle}>collapse</span>
        <ul style={style}>
          {childNodes}
          <li className="add"><app.AddKeypress node_type={this.state.node_type} clicked={this.addNode} /></li>
        </ul>
      </div>
    );
  },

  toggle: function() {
    this.setState({visible: !this.state.visible});
  }
});
