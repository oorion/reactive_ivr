app.QuestionNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <app.Prompt prompt={this.props.node.get('prompt')} />
      </div>
    );
  }
});
