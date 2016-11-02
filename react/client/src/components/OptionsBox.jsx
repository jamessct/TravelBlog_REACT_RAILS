var React = require('react');
var ProjectSelector = require('./ProjectSelector.jsx');
var NewProject = require('./NewProject.jsx');
var NewEntry = require('./NewEntry.jsx');

var OptionsBox = React.createClass({
  getInitialState: function() {
    return ({newProject: null, newEntry: null, editProject: null})
  },

  newProjectClick: function(event) {
    this.setState({newEntry: false});
    this.setState({editProject: false});
    this.setState({newProject: true});
  },

  newEntryClick: function(event) {
    this.setState({newProject: false});
    this.setState({editProject: false});
    this.setState({newEntry: true});
  },

  editProjectClick: function(event) {
    this.setState({newProject: false});
    this.setState({newEntry: false});
    this.setState({editProject: true});
  },

  render: function() {
    if(this.state.newProject === true) {
      return(
        <div id="sidebar">
          <h4>Select a project from the dropdown, or choose one of the options below</h4>
          <ProjectSelector 
            projects={this.props.projects}
            selectProject={this.props.selectProject}
            getEntries={this.props.getEntries}>
          </ProjectSelector>
          <button id="deleteProject"></button>

          <div id="optionButtons">
            <button id="NewProject" onClick={this.newProjectClick}>Add new project</button>
            <button id="addNewEntry" onClick={this.newEntryClick}>Add new entry</button>
            <button id="editProject" onClick={this.editProjectClick}>Edit project</button>
          </div>
        <NewProject
          postRequest={this.props.postRequest}></NewProject>
        </div>
      )
    }
    if(this.state.newEntry === true)
    return (
      <div id="sidebar">
        <h4>Select a project from the dropdown, or choose one of the options below</h4>
        <ProjectSelector 
          projects={this.props.projects}
          selectProject={this.props.selectProject}
          getEntries={this.props.getEntries}>
        </ProjectSelector>
        <button id="deleteProject"></button>

        <div id="optionButtons">
          <button id="NewProject" onClick={this.newProjectClick}>Add new project</button>
          <button id="addNewEntry" onClick={this.newEntryClick}>Add new entry</button>
          <button id="editProject" onClick={this.editProjectClick}>Edit project</button>
        </div>
        <NewEntry
          postRequest={this.props.postRequest}
          entryRequest={this.props.entryRequest}
          project={this.props.project}>
        </NewEntry>
      </div>
      )
      if(this.state.editProject === true)
      return (
        <div id="sidebar">
          <h4>Select a project from the dropdown, or choose one of the options below</h4>
          <ProjectSelector 
            selectProject={this.props.selectProject}
            getEntries={this.props.getEntries}>
          </ProjectSelector>
          <button id="deleteProject"></button>

          <div id="optionButtons">
            <button id="NewProject" onClick={this.newProjectClick}>Add new project</button>
            <button id="addNewEntry" onClick={this.newEntryClick}>Add new entry</button>
            <button id="editProject" onClick={this.editProjectClick}>Edit project</button>
          </div>
          <NewEntry
            entryRequest={this.props.entryRequest}></NewEntry>
        </div>
      )
      console.log("hi")
      return (
        <div id="sidebar">
          <h4>Select a project from the dropdown, or choose one of the options below</h4>
          <ProjectSelector 
            projects={this.props.projects}
            selectProject={this.props.selectProject}
            getEntries={this.props.getEntries}>
          </ProjectSelector>
          <button id="deleteProject"></button>

          <div id="optionButtons">
            <button id="NewProject" onClick={this.newProjectClick}>Add new project</button>
            <button id="addNewEntry" onClick={this.newEntryClick}>Add new entry</button>
            <button id="editProject" onClick={this.editProjectClick}>Edit project</button>
          </div>
        </div>
      )
  }
})

module.exports = OptionsBox;