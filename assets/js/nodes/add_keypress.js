app.AddKeypress = React.createClass({
  render: function() {
    return (
      <div className="content">
        <textarea value={this.props.node.prompt} />
      </div>
    );
  }
})