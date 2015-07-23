app.ConditionNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        Your condition: <br />
        <textarea defaultValue={this.props.node.get('condition')} />
      </div>
    );
  }
});


