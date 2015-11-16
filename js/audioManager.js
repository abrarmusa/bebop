require('soundmanager2');

soundManager.setup({
  // good to go: the onready() callback

  onready: function() {

    // SM2 has started - now you can create and play sounds!

    var mySound = soundManager.createSound({
      id: 'aSound', // optional: provide your own unique id
      url: 'music/audio.mp3'
      // onload: function() { console.log('sound loaded!', this); }
      // other options here..
    });

    // mySound.play();

  },

  // optional: ontimeout() callback for handling start-up failure

  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? No HTML5 audio support? Show an error, etc.?
    // See the flashblock demo when you want to start getting fancy.

  }

});

threeSixtyPlayer.config = {
  playNext: false,
  autoPlay: false,
  loadRingColor: '#ccc',
  playRingColor: '#000',
  backgroundRingColor: '#eee',
  circleDiameter: 256,
  circleRadius: 128,
  imageRoot: '',
  animDuration: 500,
  animTransition: Animator.tx.bouncy,
  showHMSTime: true,

  useWaveformData: true,
  waveformDataColor: '#0099ff',
  waveformDataDownsample: 3,
  waveformDataOutside: false,
  waveformDataConstrain: false,
  waveformDataLineRatio: 0.64,

  useEQData: true,
  eqDataColor: '#339933',
  eqDataDownsample: 4,
  eqDataOutside: true,
  eqDataLineRatio: 0.54,

  usePeakData: true,
  peakDataColor: '#ff33ff',
  peakDataOutside: true,
  peakDataLineRatio: 0.5,

  useAmplifier: true

}