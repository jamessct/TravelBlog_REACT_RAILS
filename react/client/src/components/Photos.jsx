var React = require('react');

var Photos = React.createClass({
  render: function() {
    var photos = this.props.entry.photo.map(function(photo, index) {
      return <img id="photos" key={index} value={index} src={photo.link}></img>
    })
    return (
      <div>
        {photos}
      </div>
    )
  }
})

module.exports = Photos;