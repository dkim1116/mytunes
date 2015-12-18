// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    // console.log('params:', params);

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
      //console.log('app is playing')
    }, this);
    // params.lib
    params.library.on('enqueue', function(song){
      // this.set('currentSong', song);
      //When you 'set' songQueue, it is set to pretty much nothing.
      //access songQueue collection, and add song
      this.get('songQueue').add(song);
      //console.log(this.get('songQueue'))
    }, this);
    // params.library.on('ended', function(song){
      
    //   console.log('ended from AppModel')
    // }, this)
  } 

});
  