app.AbstractNode = React.createClass({
  getInitialState: function() {
    return {
      visible: true,
      node_type: this.props.node.node_type
    };
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
