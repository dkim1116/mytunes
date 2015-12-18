// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('ended', function(){console.log('working')}, this)
  },

  events: {
  
  }, 

  playFirst: function(song){
    console.log('we invoked playFirst');
    this.at(0).play();


     //console.log(this.at(0));
  }




});