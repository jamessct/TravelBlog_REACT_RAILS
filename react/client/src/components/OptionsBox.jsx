var React = require('react');
var ProjectSelector = require('./ProjectSelector.jsx');
var NewProject = require('./NewProject.jsx');

var OptionsBox = React.createClass({
  render: function() {
    return(
      <div id="sidebar">
        <h4>Select a project from the dropdown, or choose one of the options below</h4>
        <ProjectSelector 
          projects={this.props.projects}
          selectProject={this.props.selectProject}
          getEntries={this.props.getEntries}>
        </ProjectSelector>
        <button id="viewProject"></button>
        <button id="editProject"></button>
        <button id="NewProject"></button>
        <button id="addNewEntry"></button>
        <button id="deleteProject"></button>
        <NewProject></NewProject>
      </div>
    )
  }
})

module.exports = OptionsBox;