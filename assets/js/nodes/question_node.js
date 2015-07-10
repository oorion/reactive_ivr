app.QuestionNode = React.createClass({
  render: function() {
    return (
      <div className="content">
        <textarea className="form-control" value={this.props.node.prompt} />
        <app.Prompt prompt={this.props.node.prompt} />
      </div>
    );
  }
});
