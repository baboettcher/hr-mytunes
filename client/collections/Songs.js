// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

  // getSongData : function() {
  //   var songLibrary = this;
  //   $.ajax({
  //   url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
  //   type: 'GET',
  //   contentType: 'json',
  //   dataType: 'json',
  //   success: function (data) {
  //     console.log('song data retrieved', data);
  //     data.results.forEach(function (entry){
  //       songLibrary.add(entry);
  //     });
  //     // songLibrary.trigger('change');

  //     //this.add(data.results);

  //   },
  //   error: function (data) {
  //     console.error('myTunes song data not retrieved', data);
  //   }

  //   });



});
