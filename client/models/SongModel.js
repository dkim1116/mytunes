// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    //Because we instanciate song off of the SongModel. By passing in the keyword this, it binds the keyword to whichever instanciation invokes it.
    this.trigger('play', this);
    console.log('a song instance has played');
  },
  enqueue: function(){
    // app.songQueue.defaults[queue].push(this);
    console.log('we enqueued!')
    this.trigger('enqueue', this);
    //app.songQueue.add(this);
    console.log('song instance', this);

    // this.inqueue = true;
  }
  // playFirst: function(){
  //   console.log('playFirst inside song Model')
  // }
  // inqueue = false;

});
