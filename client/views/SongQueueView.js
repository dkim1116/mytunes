// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    
    this.render();
    this.collection.on('add', function(){this.render()}, this);
    //this.on('enqueue', this.render(), this)
    // this.model.on('add', this.render, this)

  },
  render: function() {
   this.$el.children().detach();
   console.log(this.collection);
    this.$el.html('<th>QUEUE LIST</th>').append(
      this.collection.map(function(song){
        
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
