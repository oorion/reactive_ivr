app.HangUpNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <textarea value={this.props.node.get('prompt')} />
      </div>
    );
  }
})
