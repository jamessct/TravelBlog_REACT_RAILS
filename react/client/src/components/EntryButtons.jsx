var React = require('react');
var MainEntry = require('./MainEntry.jsx');

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
        <div id="entryButtonsDiv">
        {buttons}
        </div>
        <MainEntry 
          entry={this.props.entry}
          showComments={this.props.showComments}
          commentVisibility={this.props.commentVisibility}
          commentRequest={this.props.commentRequest}>
        </MainEntry>
      </div>
    )
  }
})

module.exports = EntryButtons;