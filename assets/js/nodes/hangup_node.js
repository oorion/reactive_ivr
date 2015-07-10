app.HangUpNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <textarea className="form-control" value={this.props.node.prompt} />
      </div>
    );
  }
})
