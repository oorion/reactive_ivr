app.TransferNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <textarea value={this.props.node.prompt} />
        <br />
        Destination: <input type="text" value={this.props.node.destination} />
      </div>
    );
  }
});