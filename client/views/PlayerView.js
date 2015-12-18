// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay/>', 
  // onended=" (ended())()" />'
  

  initialize: function() {
    //Use jQuery .bind() method to set context for listener
    this.$el.on('ended', function(){
      // console.log('ended works');
      this.ended();
    }.bind(this))
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    // this.$el.attr('onended', function(){}, this)
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  ended: function(){
     // console.log("ended from the playerView method")
     // console.log(this.SongQueue);
    this.trigger('ended', this);


  }

});
