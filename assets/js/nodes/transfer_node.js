app.TransferNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <app.Prompt prompt={this.props.node.prompt} />
        <br />
        Destination: <input className="form-control" type="text" value={this.props.node.destination} />
      </div>
    );
  }
});
