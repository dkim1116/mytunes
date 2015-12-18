// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', function(){console.log('listening to songqueue')}, this)
    // this.model.on
    // this.on('play', function(song){
    //   this.add(song);
    //   console.log('SONG QUEUE LISTENER!')      
    // }, this )
  },
  // defaults:{
  //   queue: []
  // }, 
  

  events: {
    'enqueue': function(song){
      this.add(song);
      console.log('SONG QUEUE LISTENER!')      
    }
  }



});