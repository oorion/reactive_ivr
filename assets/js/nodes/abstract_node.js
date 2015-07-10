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

  render: function() {
    var childNodes;
    var classObj;
    var anyChildren = this.props.node.children != null;

    if (anyChildren) {
      childNodes = this.props.node.children.map(function(node, index) {
        return <li key={index}><app.AbstractNode node={node} keypress={index+1} /></li>
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
        </div>
        <span className={React.addons.classSet(classObj)} onClick={this.toggle}>collapse</span>
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  },

  toggle: function() {
    this.setState({visible: !this.state.visible});
  }
});
