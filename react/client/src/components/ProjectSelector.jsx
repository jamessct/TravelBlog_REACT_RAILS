var React = require('react');

var ProjectSelector = React.createClass({
  handleSelectChange: function(event) {
    var newIndex = event.target.value;
    this.props.selectProject(newIndex);
    this.props.getEntries(newIndex);
  },

  render: function() {
    var options = this.props.projects.map(function(project, index) {
      return <option key={index} value={index}> {project.title} </option>
    })
    return (
      <div id="sidebar">
        <select id="projectSelector" defaultValue="default" onChange={this.handleSelectChange}>
          <option id="default">Select a project</option>
          {options}
        </select>
      </div>
    )
  }
})

module.exports = ProjectSelector;