/*!
 *  Howler.js Radio Demo
 *  howlerjs.com
 *
 *  (c) 2013-2018, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

// Cache references to DOM elements.
// var elms = ['station0', 'title0', 'live0', 'playing0'];
var elms = ['station0', 'title0', 'playing0','station1', 'title1', 'playing1','station2', 'title2', 'playing2','station3', 'title3', 'playing3','station4', 'title4', 'playing4','station5', 'title5', 'playing5','station6', 'title6', 'playing6','station7', 'title7', 'playing7','station8', 'title8', 'playing8','station9', 'title9', 'playing9'
, 'station10', 'title10', 'playing10', 'station11', 'title11', 'playing11', 'station12', 'title12', 'playing12', 'station13', 'title13', 'playing13', 'station14', 'title14', 'playing14', 'station15', 'title15', 'playing15', 'station16', 'title16', 'playing16', 'station17', 'title17', 'playing17', 'station18', 'title18', 'playing18', 'station19', 'title19', 'playing19'
, 'station20', 'title20', 'playing20', 'station21', 'title21', 'playing21', 'station22', 'title22', 'playing22', 'station23', 'title23', 'playing23', 'station24', 'title24', 'playing24', 'station25', 'title25', 'playing25', 'station26', 'title26', 'playing26', 'station27', 'title27', 'playing27', 'station28', 'title28', 'playing28', 'station29', 'title29', 'playing29'
, 'station30', 'title30', 'playing30', 'station31', 'title31', 'playing31', 'station32', 'title32', 'playing32', 'station33', 'title33', 'playing33', 'station34', 'title34', 'playing34', 'station35', 'title10', 'playing35', 'station36', 'title10', 'playing36', 'station37', 'title37', 'playing37', 'station38', 'title38', 'playing38', 'station39', 'title39', 'playing39'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

/**
 * Radio class containing the state of our stations.
 * Includes all methods for playing, stopping, etc.
 * @param {Array} stations Array of objects with station details ({title, src, howl, ...}).
 */
var Radio = function(stations) {
  var self = this;

  self.stations = stations;
  self.index = 0;
  
  // Setup the display for each station.
  for (var i=0; i<self.stations.length; i++) {
    window['title' + i].innerHTML = '<b>' + self.stations[i].freq + '</b> ' + self.stations[i].title;
    window['station' + i].addEventListener('click', function(index) {
      var isNotPlaying = (self.stations[index].howl && !self.stations[index].howl.playing());
      
      // Stop other sounds or the current one.
      radio.stop();

      // If the station isn't already playing or it doesn't exist, play it.
      if (isNotPlaying || !self.stations[index].howl) {
        radio.play(index);
        console.log('pressed');
      }
    }.bind(self, i));
  }
};
Radio.prototype = {
  /**
   * Play a station with a specific index.
   * @param  {Number} index Index in the array of stations.
   */
  play: function(index) {
    var self = this;
    var sound;

    index = typeof index === 'number' ? index : self.index;
    var data = self.stations[index];

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: data.src,
        html5: true, // A live stream can only be played through HTML5 Audio.
        format: ['mp3', 'aac'],
        loop: true
      });
    }

    // Begin playing the sound.
    sound.play();

    // Toggle the display.
    self.toggleStationDisplay(index, true);

    // Keep track of the index we are currently playing.
    self.index = index;
  },


  /**
   * Stop a station's live stream.
   */
  stop: function() {
    var self = this;

    // Get the Howl we want to manipulate.
    var sound = self.stations[self.index].howl;

    // Toggle the display.
    self.toggleStationDisplay(self.index, false);

    // Stop the sound.
    if (sound) {
      sound.stop();
    }
  },

  /**
   * Toggle the display of a station to off/on.
   * @param  {Number} index Index of the station to toggle.
   * @param  {Boolean} state true is on and false is off.
   */
  toggleStationDisplay: function(index, state) {
    var self = this;

    // Highlight/un-highlight the row.
    window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

    // // Show/hide the "live" marker.
    // window['live' + index].style.opacity = state ? 1 : 0;

    // Show/hide the "playing" animation.
    window['playing' + index].style.display = state ? 'block' : 'none';
    // setTimeout(function(){
    //   window['playing' + index].style.display = 'none';
    // }, 30000);
  }
};





// Setup our new radio and pass in the stations.
var radio = new Radio([
  {
    freq: '',
    title: "Shape of You",
    src: ['https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Despacito – Remix",
    src: ['../audios/DespacitoRemix.mp3'],
    howl: null
  },
  {
    freq: '',
    title: "New Rules",
    src: ['https://p.scdn.co/mp3-preview/cd327b079e2de504b4444f88e6b3b79afdf789f8?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Something Just Like This",
    src: ['https://p.scdn.co/mp3-preview/cb1ae1f9e2f874dd2d19e4c29edb552777eb1e7a?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Despacito",
    src: ['../audios/Despacito.mp3'],
    howl: null
  },
  {
    freq: '',
    title: "HUMBLE.",
    src: ['https://p.scdn.co/mp3-preview/17e74329d43f2733d413c0ea9ce63bfde1d4ac66?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Perfect",
    src: ['https://p.scdn.co/mp3-preview/9779493d90a47f29e4257aa45bc6146d1ee9cb26?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Congratulations",
    src: ['https://p.scdn.co/mp3-preview/b3f44c1ac9c9945c1d26459cdb3522de4f8bed24?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "I Don't Wanna Live Forever",
    src: ['../audios/IDontWannaLiveForever.mp3'],
    howl: null
  },
  {
    freq: '',
    title: "Mi Gente",
    src: ['../audios/MiGente.mp3'],
    howl: null
  },
  {
    freq: '',
    title: "Complicated (feat...",
    src: ['https://p.scdn.co/mp3-preview/f216a144f520dc58355afb4a43239d0bef381d55?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Drip (feat. Migos)",
    src: ['https://p.scdn.co/mp3-preview/539413b256bca7bd14951d182f4771691e68bb3e?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "It's the Most...",
    src: ['https://p.scdn.co/mp3-preview/6b5b5e401c3803f9ff6ff877fe79fae9f22e162b?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Stressed Out",
    src: ['https://p.scdn.co/mp3-preview/0e0951b811f06fea9162eb7e95e4bae4802d97af?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Faint",
    src: ['https://p.scdn.co/mp3-preview/9ed8538f21075f98c8523bd4bd70e01bc7ceb1a0?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Orlando",
    src: ['https://p.scdn.co/mp3-preview/874e50639db029aaf7daa17cc1443735bc4371e1?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Beautiful Trauma",
    src: ['https://p.scdn.co/mp3-preview/03c2b17b13b3038267977db84a777be121be8ed3?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Agora Vai Sentar",
    src: ['https://p.scdn.co/mp3-preview/cf2d64c413a3320ccdfce6269b2c8498fc2d2444?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "The Explanation",
    src: ['https://p.scdn.co/mp3-preview/0784a180a98707a31b4847b2b60e6b24b98a22c8?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Let You Down",
    src: ['https://p.scdn.co/mp3-preview/240c59bc6efca42a705fadc24e3d94636ab0b48b?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "The Explanation",
    src: ['https://p.scdn.co/mp3-preview/0784a180a98707a31b4847b2b60e6b24b98a22c8?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Perfect",
    src: ['https://p.scdn.co/mp3-preview/9779493d90a47f29e4257aa45bc6146d1ee9cb26?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Somebody Else",
    src: ['https://p.scdn.co/mp3-preview/cdf47d5e30a20d58a5fd7db58e538b25b98e4b65?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Carol of the...",
    src: ['https://p.scdn.co/mp3-preview/87ea75de8f6e2ad40bedc8325fa25d7dae38a695?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Bebe (feat...",
    src: ['https://p.scdn.co/mp3-preview/44d99d489d2b96519d37e8ed6c25fe573f08084e?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "No Money",
    src: ['https://p.scdn.co/mp3-preview/fe269d15b08ee08b10c9fc04c5ed06decaf90ea8?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Sunset Lover",
    src: ['https://p.scdn.co/mp3-preview/548545f6df276b92cafd8a29996021ae40e73d1d?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Closer",
    src: ['https://p.scdn.co/mp3-preview/8d3df1c64907cb183bff5a127b1525b530992afb?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Revenge",
    src: ['https://p.scdn.co/mp3-preview/b7895958fbbcfcf68a8ce6e4b92159a9f8ee56ef?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "All Night",
    src: ['https://p.scdn.co/mp3-preview/5b92ff49b0848edd1fad2eb8a747b95248d8c625?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Finesse (Remix...",
    src: ['https://p.scdn.co/mp3-preview/10fbdd7986417e30e3bbf06d3fa22efe1663b2ee?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Water Under...",
    src: ['https://p.scdn.co/mp3-preview/e8dcd070b5696c2ebe823644c543ed48e68ec6dd?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Little Saint...",
    src: ['https://p.scdn.co/mp3-preview/43040750d6ec320bd4efbfb7df3886685ddf8249?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Twoïë",
    src: ['https://p.scdn.co/mp3-preview/e00a6d3f4c33c840f26152438a2756a7075895c3?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Instruction",
    src: ['https://p.scdn.co/mp3-preview/2adfbebb42c088a1440e2d30c9caaa03e2184041?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "It's the Most...",
    src: ['https://p.scdn.co/mp3-preview/6b5b5e401c3803f9ff6ff877fe79fae9f22e162b?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Carol of the...",
    src: ['https://p.scdn.co/mp3-preview/87ea75de8f6e2ad40bedc8325fa25d7dae38a695?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Anywhere",
    src: ['https://p.scdn.co/mp3-preview/ec024df926734cd185ae9fde8d081cc4d451c4d9?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "Give Me Love",
    src: ['https://p.scdn.co/mp3-preview/b0e38982098a56852a392bcd3d3bbb22813aa03d?cid=774b29d4f13844c495f206cafdad9c86'],
    howl: null
  },
  {
    freq: '',
    title: "FEAR.",
    src: ['https://p.scdn.co/mp3-preview/d4a31af49d6ea1c0ba8e422528e949ab09eaf92d?cid=774b29d4f13844c495f206cafdad9c86time'],
    howl: null
  }
]);
