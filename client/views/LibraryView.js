// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // setInterval(this.render.bind(this), 200);
    this.render();
    // console.log(this.collection);
    // this.collection.on('add', function() {
    //   this.render();
    // }, this);

  // this.collection.on('fetch', function() {
  //   this.render();
  // }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    console.log('called the render method on LibraryView');
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
