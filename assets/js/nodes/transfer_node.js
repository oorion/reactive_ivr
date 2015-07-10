app.TransferNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        Destination: <input className="form-control" type="text" value={this.props.node.get('destination')} />
        <br />
        <app.Prompt prompt={this.props.node.get('prompt')} />
      </div>
    );
  }
});
