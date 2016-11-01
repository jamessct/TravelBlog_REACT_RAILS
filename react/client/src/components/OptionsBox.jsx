var React = require('react');
var ProjectSelector = require('./ProjectSelector.jsx');

var OptionsBox = React.createClass({
  render: function() {
    return(
      <div>
        <ProjectSelector 
          projects={this.props.projects}
          selectProject={this.props.selectProject}
          getEntries={this.props.getEntries}>
        </ProjectSelector>
      </div>
    )
  }
})

module.exports = OptionsBox;