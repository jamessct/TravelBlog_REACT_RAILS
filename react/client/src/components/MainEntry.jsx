var React = require('react');
var Comments = require('./Comments.jsx');
var Photos = require('./Photos.jsx');

var MainEntry = React.createClass({
  render: function() {
    if(!this.props.entry) return <div></div>
    console.log(this.props.entry)
    var title = <h2>{this.props.entry.title}</h2>
    var tagline = <h4>{this.props.entry.tagline}</h4>
    var mainPhoto = <img id="mainPhoto" src={this.props.entry.mainPhoto}></img>
    var text = <p>{this.props.entry.body}</p>
    return (
      <div>
        {title}
        {tagline}
        {mainPhoto}
        {text}
        <Photos></Photos>
        <Comments></Comments>
      </div>
      
    )
  }
})

module.exports = MainEntry;