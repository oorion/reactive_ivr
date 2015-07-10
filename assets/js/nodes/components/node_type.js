app.NodeType = React.createClass({
  onTypeChange: function() {
    this.props.handleTypeChange(this.refs.nodeSelect.getDOMNode().value);
  },

  render: function() {
    return (
      <select
        className="node-select"
        onChange={this.onTypeChange}
        value={this.props.active}
        ref="nodeSelect">
        <option value="Question">Ask a Question</option>
        <option value="Transfer">Forward to call center</option>
        <option value="Hang Up"  >Hang Up</option>
      </select>
    );
  }
});
