app.Prompt = React.createClass({
  getInitialState: function() {
    return {
      visible: this.props.prompt
    };
  },

  onPromptToggle: function() {
    this.setState({
      visible: this.refs.showPrompt.getDOMNode().checked
    })
  },

  render: function() {
    return(
      <div>
        <label>
          <input type="checkbox" checked={this.state.visible} ref="showPrompt" onChange={this.onPromptToggle} />
          Play prompt first
        </label>

        <div style={{display: this.state.visible ? 'block' : 'none'}}>
          <textarea defaultValue={this.props.prompt} />
        </div>
      </div>
    );
  }
});
