app.TreeNode = React.createClass({
    getInitialState: function() {
      return {
        visible: true
      };
    },

    render: function() {
      var childNodes;
      var classObj;

      if (this.props.node.children != null) {
        childNodes = this.props.node.children.map(function(node, index) {
          return <li key={index}><app.TreeNode node={node} /></li>
        });

        classObj = {
          togglable: true,
          "togglable-down": this.state.visible,
          "togglable-up": !this.state.visible
        };
      }

      var style;
      if (!this.state.visible) {
        style = {display: "none"};
      }

      return (
        <div>
          <h5 onClick={this.toggle}>
            {this.props.node.node_type}
          </h5>
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
