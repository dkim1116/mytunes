// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection:this.model.get('songQueue')});
    // console.log(this.songQueueView);
    

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.on('ended', function(song){  
      this.model.get('songQueue').shift();
      this.model.get('songQueue').playFirst();
      //access next song in songQueue, and play it in playerview
    }, this)
   // this.libraryView.on('change', function(){  
   //    this.libraryView.render()
   //  }, this) 
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
