var React = require('react');
var ProjectSelector = require('./ProjectSelector.jsx');
var NewProject = require('./NewProject.jsx');

var OptionsBox = React.createClass({
  getInitialState: function() {
    return ({newProject: false, newEntry: false, editProject: false})
  },

  newProjectClick: function(event) {
    this.setState({newProject: true})
    if(this.state.newEntry || this.state.editProject === true) {
      this.setState({newEntry: false});
      this.setState({editProject: false});
    }
  },

  newEntryClick: function(event) {
    this.setState({newEntry: true})
    if(this.state.newProject || this.state.editProject === true) {
      this.setState({newProject: false});
      this.setState({editProject: false});
    }
  },

  editProjectClick: function(event) {
    this.setState({editProject: true})
    if(this.state.newProject || this.state.newEntry === true) {
      this.setState({newProject: false});
      this.setState({newEntry: false});
    }
  },

  render: function() {
    console.log(this.state)
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
        <NewProject
          postRequest={this.props.postRequest}></NewProject>
      </div>
      )
      if(this.state.editProject === true)
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
            postRequest={this.props.postRequest}></NewEntry>
        </div>
      )
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