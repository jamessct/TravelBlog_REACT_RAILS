var React = require('react');
var Text = require('./Text.jsx');
var EntryButtons = require('./EntryButtons');

var DisplayBox = React.createClass({
  render: function() {
    if(!this.props.project) 
      return <div id="display"></div>
    return (
      <div id="display">
        <h2 id="projectTitle">{this.props.project.title}</h2>
        <EntryButtons
          project={this.props.project}
          entry={this.props.entry}
          entries={this.props.entries}
          getEntries={this.props.getEntries}
          selectEntry={this.props.selectEntry}>
        </EntryButtons>
      </div>
    )
  }
})

module.exports = DisplayBox;