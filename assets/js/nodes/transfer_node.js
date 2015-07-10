app.TransferNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <textarea className="form-control" value={this.props.node.prompt} />
        <br />
        Destination: <input className="form-control" type="text" value={this.props.node.destination} />
      </div>
    );
  }
});
