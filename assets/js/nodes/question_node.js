app.QuestionNode = React.createClass({
  render: function() {
    return (
      <div>
        <h5>
          Ask a Question:
        </h5>
        <textarea value={this.props.node.prompt} />
      </div>
    );
  }
});

app.TransferNode = React.createClass({
  render: function() {
    return (
      <div>
        <h5>
          Transfer call:
        </h5>
        <textarea value={this.props.node.prompt} />
        <br />
        Destination: <input type="text" value={this.props.node.destination} />
      </div>
    );
  }
});

app.HangUpNode = React.createClass({
  render: function() {
    return (
      <div>
        <h5>
          Hang Up!
        </h5>
        <textarea value={this.props.node.prompt} />
      </div>
    );
  }
});
