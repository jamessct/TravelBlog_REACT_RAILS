var React = require('react')

var NewEntry = React.createClass({
  getInitialState: function() {
    return {title: "", tagline: "", mainPhoto: "", body: "", project_id: null}
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

  // createEntryObject: function() {
  //   console.log(this.props.project.id)
  //   var title = this.state.title.trim();
  //   var tagline = this.state.tagline.trim();
  //   var mainPhoto = this.state.mainPhoto.trim();
  //   var body = this.state.body.trim();
  //   var project_id = this.props.project.id
  //   return {entries: [{title: title, tagline: tagline, mainPhoto: mainPhoto, body: body, project_id: project_id, photo: []}]}
  // },

  handleSubmit: function(event) {
    event.preventDefault();
    var title = this.state.title.trim();
    var tagline = this.state.tagline.trim();
    var mainPhoto = this.state.mainPhoto.trim();
    var body = this.state.body.trim();
    var project_id = this.props.project.id;
    console.log(this.props.project.id)
    if(!title || !tagline || !mainPhoto || !body) {
      return;
    }
    this.props.entryRequest({
      entry: {
        title: title,
        tagline: tagline,
        mainPhoto: mainPhoto,
        body: body,
        project_id: project_id
      }
    });
    this.setState({title: "", tagline: "", mainPhoto: "", body: "", project_id: null})
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
            onChange={this.handleMainPhotoChange}/>

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