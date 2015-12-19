describe('PlayerView', function() {
  var library, appView;

  beforeEach(function() {

    library = new Songs([
{
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3",
    title: "Age Ain't Nothing But A Number",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
    title: "Hot Like Fire",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
    title: "If Your Girl Only Knew",
    artist: "Aaliyah",
  }
    ]);
    // playerView is created in AppView initialize
    // access with appView.playerView
    appView = new AppView({model: new AppModel({library: library})});
  });

  it('gets its model property set to any song that is played', function(){
    expect(appView.playerView.model).to.not.equal(library.at(0));
    library.at(0).play();
    expect(appView.playerView.model).to.equal(library.at(0));
  });

  describe('Song transitions', function() {
    it('dequeues a song when finished playing & plays the next song', function(){
      var firstSong = library.at(0)
        , secondSong = library.at(1)
        , thirdSong = library.at(2)
        , songQueue = appView.model.get('songQueue');
      // Set up a queue of three songs
      songQueue.add(firstSong);
      songQueue.add(secondSong);
      songQueue.add(thirdSong);
      // play the first song
      songQueue.playFirst();
      expect(appView.playerView.model).to.equal(firstSong);
      // Simulate the end of the first song
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).to.equal(secondSong);
      // Simulate the end of the second song
      $(appView.playerView.el).trigger('ended');
      expect(appView.playerView.model).to.equal(thirdSong);
    });
  });

});
