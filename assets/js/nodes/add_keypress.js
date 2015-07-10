app.AddKeypress = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    this.props.clicked();
  },

  render: function() {
    return (
      <button className="btn btn-create" style={{ display: (this.props.node_type == "Question" ? 'block' : 'none') }} onClick={this.handleClick}>
      <i className="glyphicon glyphicon-plus"></i> Add Keypress
      </button>
    );
  }
})
