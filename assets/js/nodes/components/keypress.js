app.Keypress = React.createClass({
  render: function() {
    var keyPressClasses = {
      hidden: !this.props.keypress,
      keypress: true
    };

    return (
      <div className={React.addons.classSet(keyPressClasses)}>
        {this.props.keypress}
      </div>
    );
  }
});
