var React = require('react');
var CommentInput = require('./CommentInput.jsx');

var CommentsList = React.createClass({
  render: function() {
    var comments = this.props.comments.map(function(comment, index) {
      return (
        <div key={index} id="comment">
          <h4>{comment.author}</h4>
          <p>{comment.comment}</p>
        </div>
      )
    })
    if (this.props.commentVisibility === true) 
      return (
        <div id="commentDiv">
          <CommentInput></CommentInput>
          {comments}
        </div>
      )
    return (
      <div>
      </div>
    )
  }
})

module.exports = CommentsList;

