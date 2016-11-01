var React = require('react');

var Comments = React.createClass({
  commentsOnClick: function(event) {

  },

  render: function() {
    return(
      <div>
        <button id="commentsButton" onClick="commentsOnClick">Show/Hide Comments</button>
      </div>
    )
  }
})

module.exports = Comments;