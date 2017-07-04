// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();

    console.log('initializing SongQueueView');
  },

  render: function() {
    console.log('rendering SongQueue');
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
    this.collection.map(function(song) {
    return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
