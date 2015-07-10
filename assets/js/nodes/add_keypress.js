app.AddKeypress = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    this.props.clicked();
  },

  render: function() {
    return (
      <button style={{ display: (this.props.node_type == "Question" ? 'block' : 'none') }} onClick={this.handleClick}>
        Add Keypress
      </button>
    );
  }
})
