// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  },

  playFirst : function(){
    // trigger play event on first index
    this.at(0).play();

  },

  playNext : function(){
    console.log('playing next song');
    this.remove(this.at(0));
    this.playFirst();

  }

});