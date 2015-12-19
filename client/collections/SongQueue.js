// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('ended', function(){console.log('working')}, this)
    this.on('add', function(){
      
      if (this.length === 1){
        this.playFirst();
      }

    },this);
    //********************What is going on
    this.on('ended', function(){
      if(this.length>1){
      this.shift()
      this.playFirst();
      }
    });
    this.on('dequeue', function(){
      this.shift();
    })
  },

  // events: {
  
  // }, 

  playFirst: function(song){
    
    this.at(0).play();


     //console.log(this.at(0));
  }






});