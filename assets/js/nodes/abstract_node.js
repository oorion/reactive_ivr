app.AbstractNode = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
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

    switch(this.props.node.node_type) {
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
        throw("Unknown ivr node type: " + this.props.node.node_type);
    }

    var keyPressObject = {
      hidden: !this.props.keypress,
      keypress: true
    };

    return (
      <div>
        <div className={this.props.node.node_type + " " + "node"}>
          <div className={React.addons.classSet(keyPressObject)}>
            {this.props.keypress}
          </div>
          <div className="content">
            <ViewClass node={this.props.node} />
          </div>
          <div style={{clear: 'left'}} />
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
