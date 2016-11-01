var React = require('react');

var CommentInput = React.createClass({
  render: function() {
    return (
      <div>
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
      </div>
    )
  }
})

module.exports = CommentInput;