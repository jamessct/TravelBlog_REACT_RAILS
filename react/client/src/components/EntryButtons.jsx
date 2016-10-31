var React = require('react');
var Text = require('./Text.jsx');

var EntryButtons = React.createClass({
  entryOnClick: function(event) {
    var newIndex = event.target.value;
    this.props.selectEntry(newIndex);

  },

  render: function() {
    var buttons = this.props.entries.map(function(entry, index) {
      return <button key={index} value={index} id="entryButton" onClick={this.entryOnClick}>{entry.title}</button>
    }.bind(this))
    return (
      <div id="entryButtonsContainer">
        {buttons}
        <Text 
          id="textBox"
          entry={this.props.entry}>
        </Text>
      </div>
    )
  }
})

module.exports = EntryButtons;