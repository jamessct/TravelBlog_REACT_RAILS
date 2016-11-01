var React = require('react');
var CommentsList = require('./CommentsList.jsx');

var CommentsButton = React.createClass({
  commentsOnClick: function(event) {
    console.log(this.props.commentVisibility)
    this.props.showComments(true);
    console.log(this.props.commentVisibility)
  },

  hideOnClick: function(event) {
    this.props.showComments(false);
  },

  render: function() {
    return(
      <div>
        <div id="commentButtons">
          <h4 id="showComments" onClick={this.commentsOnClick}>Show Comments |
          </h4>
          <h4 id="hideComments" onClick={this.hideOnClick}>| Hide Comments</h4> 
        </div>
        <CommentsList
          commentVisibility={this.props.commentVisibility}
          comments={this.props.entry.comment}
          entry={this.props.entry}
          title={this.props.entry.title}>
        </CommentsList>
      </div>
    )
  }
})

module.exports = CommentsButton;