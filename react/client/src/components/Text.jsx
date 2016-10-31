var React = require('react');

var Text = React.createClass({
  render: function() {
    if(!this.props.entry) return <div></div>
    console.log(this.props.entry);
    var body = this.props.entry.text.map(function(text, index) {
      return <p>{text.body}</p>
    })
    return(
      <div id="textDiv">
        {body}
      </div>
    )
  }
})

module.exports = Text;