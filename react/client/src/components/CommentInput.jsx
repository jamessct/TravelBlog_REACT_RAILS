var React = require('react');

var CommentInput = React.createClass({
  getInitialState:function() {
    return {author: "", comment: ""}
  },

  handleAuthorChange: function(event) {
    this.setState({author: event.target.value})
  },

  handleTextChange: function(event) {
    this.setState({comment: event.target.value})
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var author = this.state.author.trim();
    var comment = this.state.comment.trim();
    if(!author || !comment) {
      return;
    }
    this.props.commentRequest({
      comment: {
        author: author,
        comment: comment
      }
    });
    this.setState({comment: "", author: ""})
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Your name" 
          onChange={this.handleAuthorChange}
        />

        <input 
          type="text" 
          placeholder="Say something" 
          onChange={this.handleTextChange}
        />

        <input
          type="submit"
          value="Submit!"
        />
      </form>
    )
  }
})

module.exports = CommentInput;