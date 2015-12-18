// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
     this.on('enqueue', function(){console.log('listening to songqueue')}, this)

  },

  render: function() {
  }

});
