var React = require('react')

var NewEntry = React.createClass({
  getInitialState: function() {
    return {, title: "", tagline: "", mainPhoto: "", body: ""}

    //{title: "", tagline: "", mainImage: "", body: ""}
  },

  handleEntryChange: function(event) {
    this.setState({title: event.target.value})
  },

  handleTaglineChange: function(event) {
    this.setState({tagline: event.target.value})
  },

  handleMainPhotoChange: function(event) {
    this.setState({mainPhoto: event.target.value})
  },

  handleBodyChange: function(event) {
    this.setState({body: event.target.value})
  },

  createEntryObject: function() {

  },

  handleSubmit: function(event) {
    createEntryObject();
  },

  render: function() {
    return (
      <div>
        <form className="entryForm" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Entry title" 
            onChange={this.handleEntryChange}
          />

          <input
            type="text"
            placeholder="Enter a FUN tagline here"
            onChange={this.handleTaglineChange}
          />

          <input
            type="text"
            placeholder="Put a link to your main image here"
            onChage={this.handleMainPhotoChange}/>

          <input
            type="text"
            placeholder="Stick your text here"
            onChange={this.handleBodyChange}
          />

          <input 
            type="submit"
            value="GO!"  
          />
        </form>
      </div>
    )
  }
})

module.exports = NewEntry;