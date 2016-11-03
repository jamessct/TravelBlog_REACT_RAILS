var React = require('react');
var EntryButtons = require('./EntryButtons.jsx');

var DisplayBox = React.createClass({
  render: function() {
    if(!this.props.project) 
      return <div id="display"></div>
    return (
      <div id="display">
        <h2 id="projectTitle"><i>{this.props.project.title}</i>, by {this.props.project.author}</h2>
        <EntryButtons
          project={this.props.project}
          entry={this.props.entry}
          entries={this.props.entries}
          getEntries={this.props.getEntries}
          selectEntry={this.props.selectEntry}
          showComments={this.props.showComments}
          commentVisibility={this.props.commentVisibility}
          commentRequest={this.props.commentRequest}>
        </EntryButtons>
      </div>
    )
  }
})

module.exports = DisplayBox;