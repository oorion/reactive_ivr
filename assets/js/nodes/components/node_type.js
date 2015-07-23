app.NodeType = React.createClass({
  onTypeChange: function() {
    this.props.handleTypeChange(this.refs.nodeSelect.getDOMNode().value);
  },

  render: function() {
    return (
      <select
        className="form-control node-select"
        onChange={this.onTypeChange}
        value={this.props.active}
        ref="nodeSelect">
        <option value="Menu"   >Ask a Question</option>
        <option value="Connect">Forward to call center</option>
        <option value="Condition">Check a condition</option>
        <option value="EndCall">Hang Up</option>
      </select>
    );
  }
});
