app.TransferNode = React.createClass({
  onChange: function() {
    var newVal = this.refs.destination.getDOMNode().value;
    this.props.node.set({ destination_phone_number: newVal });
  },

  render: function() {
    return (
      <div className="content">
        Destination:&nbsp;
        <input className="form-control"
               type="text"
               ref="destination"
               onChange={this.onChange}
               defaultValue={this.props.node.get('destination_phone_number')} />
        <br />
        <app.Prompt prompt={this.props.node.get('prompt')} />
      </div>
    );
  }
});
