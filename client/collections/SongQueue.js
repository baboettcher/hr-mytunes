// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },

  playFirst: function() {
    // trigger play event on first index
    console.log('playing clicked song');
    this.at(0).play();
  },

  dequeue: function(song) {
    console.log('song ended, dequeueing', 'here is the song: ', song);
    if (this.at(0) === song){
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  enqueue: function(song) {
    if (this.length === 1){
      this.playFirst();
    }
  },

  playNext: function() {
    console.log('playing next song');
    this.remove(this.at(0));
    if (this.length > 0){
       this.playFirst();
     }
  }

});