var React = require('react');
var DisplayBox = require('./DisplayBox.jsx');
var OptionsBox = require('./OptionsBox.jsx');

var ScrapBox = React.createClass({
  getInitialState: function() {
    return {projects: [], entries: [], comments: null, focusProject: null, focusEntry: null, commentVisibility: false}
  },

  getProjects: function() {
    console.log("getRequest made")
    var url = "http://localhost:3000/api/projects/";
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = function() {
      if( request.status === 200 ) {
        var data = JSON.parse(request.responseText);
        this.setState({projects: data});
        this.forceUpdate()
      }
    }.bind(this);
    request.send(null);
  },

  getComments: function() {
    console.log("getRequest made")
    var url = "http://localhost:3000/api/comments/";
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = function() {
      if( request.status === 200 ) {
        var data = JSON.parse(request.responseText);
        this.setState({comments: data});
        this.forceUpdate()
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function() {
    this.getProjects();
    this.getComments();
  },

  handleProjectSubmit: function(project) {
    console.log(project)
    var projects = this.state.projects;
    var newProject = projects.concat([project.project])
    var url = "http://localhost:3000/api/projects/";
    var request = new XMLHttpRequest();
    request.open( "POST", url );
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      if( request.status === 200 ) {
        var responseData = JSON.parse(request.responseText);
        this.setState({projects: newProject});
      }
    }.bind(this);
    request.send(JSON.stringify(project));
  },

  handleEntrySubmit: function(entry) {
    console.log(entry)
    var entries = this.state.entries;
    var newEntry = entries.concat([entry.entry])
    var url = "http://localhost:3000/api/entries";
    var request = new XMLHttpRequest();
    request.open( "POST", url );
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      if( request.status === 200 ) {
        var responseData = JSON.parse(request.responseText);
        this.setState({entries: newEntry});
      }
    }.bind(this);
    request.send(JSON.stringify(entry));
    this.getProjects()
  },

  handleCommentSubmit: function(comment) {
    var comments = this.state.comments;
    var newComment = comments.concat([comment.comment])
    var url = "http://localhost:3000/api/comments";
    var request = new XMLHttpRequest();
    request.open( "POST", url );
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      if( request.status === 200 ) {
        var responseData = JSON.parse(request.responseText);
        this.setState({comments: newEntry});
      }
    }.bind(this);
    request.send(JSON.stringify(comment));
    this.getProjects()
  },

  getEntries: function(index) {
    var newProject = this.state.projects[index];
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
    console.log("set Focus entry ", this.state)
    console.log(index)
    var newEntry = this.state.focusProject.entries[index];
    console.log("new entry", newEntry)

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
            postRequest={this.handleProjectSubmit}
            entryRequest={this.handleEntrySubmit}>
          </OptionsBox>
          <DisplayBox 
            project={this.state.focusProject}
            entry={this.state.focusEntry}
            entries={this.state.entries}
            selectEntry={this.setFocusEntry}
            showComments={this.showComments}
            commentVisibility={this.state.showComments}
            commentRequest={this.handleCommentSubmit}>
          </DisplayBox>
        </div>
      </div>
    )
  }
})

module.exports = ScrapBox;