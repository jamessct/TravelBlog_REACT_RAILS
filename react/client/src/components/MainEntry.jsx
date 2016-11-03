var React = require('react');
var CommentsButton = require('./CommentsButton.jsx');
var Photos = require('./Photos.jsx');

var MainEntry = React.createClass({
  render: function() {
    if(!this.props.entry) return <div></div>
    var title = <h2 id="someText"><b>{this.props.entry.title}</b></h2>
    var tagline = <h3 id="someText">{this.props.entry.tagline}</h3>
    var mainPhoto = <img id="mainPhoto" src={this.props.entry.mainPhoto}></img>
    var text = <p id="body">{this.props.entry.body}</p>
    return (
      <div id="mainBlog">
        {title}
        {tagline}
        {mainPhoto}
        {text}
        <Photos entry={this.props.entry}></Photos>
        <CommentsButton 
          entry={this.props.entry}
          showComments={this.props.showComments}
          commentVisibility={this.props.commentVisibility}
          commentRequest={this.props.commentRequest}>
        </CommentsButton>
      </div>
      
    )
  }
})

module.exports = MainEntry;