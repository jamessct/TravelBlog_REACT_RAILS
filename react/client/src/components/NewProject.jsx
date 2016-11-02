var React = require('react');

var NewProject = React.createClass({
  getInitialState: function() {
    return {title: "", author: "", summary: ""}
  },

  handleProjectChange: function(event) {
    this.setState({title: event.target.value})
  },

  handleAuthorChange: function(event) {
    this.setState({author: event.target.value})
  },

  handleSummaryChange: function(event) {
    this.setState({summary: event.target.value})
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var title = this.state.title.trim();
    var author = this.state.author.trim();
    var summary = this.state.summary.trim();
    console.log("hi")
    if (!title || !author || !summary) {
      return;
    }
    console.log("is there anybody out there?")
    this.props.postRequest({
      project: {
        title: title,
        summary: summary,
        author: author
      }
    });
    this.setState({title: "", author: "", summary: ""})
  },

  render: function() {
    console.log(this.state.title)
    return (
      <form className="projectForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Project title" 
          onChange={this.handleProjectChange}
        />

        <input
          type="text"
          placeholder="Author"
          onChange={this.handleAuthorChange}
        />

        <input
          type="text"
          placeholder="Summary"
          onChange={this.handleSummaryChange}
        />

        <input 
          type="submit"
          value="GO!"
          
        />
      </form>

    ) 
  }
})

module.exports = NewProject;