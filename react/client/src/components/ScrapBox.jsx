var React = require('react');
var DisplayBox = require('./DisplayBox.jsx');
var OptionsBox = require('./OptionsBox.jsx');

var ScrapBox = React.createClass({
  getInitialState: function() {
    return {projects: [], entries: [], focusProject: null, focusEntry: null, commentVisibility: false}
  },

  componentDidMount: function() {
    var url = "http://localhost:3000/api/projects/";
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = function() {
      if( request.status === 200 ) {
        var data = JSON.parse(request.responseText);
        this.setState({projects: data});
      }
    }.bind(this);
    request.send(null);
  },

  handleProjectSubmit: function(project) {
    var projects = this.state.projects;
    var newProject = projects.concat([project.project])
    var url = "http://localhost:3000/api/projects/";
    var request = new XMLHttpRequest();
    request.open( "POST", url );
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      if( request.status === 200 ) {
        console.log("request had loaded");
        var responseData = JSON.parse(request.responseText);
        this.setState({projects: newProject});
      }
    }.bind(this);
    request.send(JSON.stringify(project));
  },


  getEntries: function(index) {
    var newProject = this.state.projects[index];
    if(!this.newProject.entries) return <div></div>;
    var entries = newProject.entries.map(function(entry, index) {
      return entry;
    })
    this.setState({entries: entries})
  },

  setFocusProject: function(index) {
    var newProject = this.state.projects[index];
    this.setState({focusProject: newProject});
  },

  setFocusEntry: function(index) {
    var entries = this.state.focusProject.entries.map(function(entry, index) {
      return entry;
    })
    var newEntry = entries[index];
    this.setState({focusEntry: newEntry});
  },

  showComments: function(value) {
    this.setState({showComments: value});
  },

  render: function() {
    return (
      <div>
        <div id="logoContainer">
          <div id="logo">
            <h1 id="title">scrappiii</h1>
            <h4 id="tagline">your digital scrapbook for creative projects</h4>
          </div>
        </div>
        <div id="container">
          <OptionsBox 
            projects={this.state.projects}
            project={this.state.focusProject}
            entry={this.state.focusEntry}
            selectProject={this.setFocusProject}
            getEntries={this.getEntries}
            postRequest={this.handleProjectSubmit}>
          </OptionsBox>
          <DisplayBox 
            project={this.state.focusProject}
            entry={this.state.focusEntry}
            entries={this.state.entries}
            selectEntry={this.setFocusEntry}
            showComments={this.showComments}
            commentVisibility={this.state.showComments}>
          </DisplayBox>
        </div>
      </div>
    )
  }
})

module.exports = ScrapBox;