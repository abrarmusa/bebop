"use strict";

let fs = require('fs');
let ytdl =require('ytdl-core');
let ffmpeg = require('fluent-ffmpeg');

class Song {

  constructor() {
    console.log('Constructing');
    this.url = 'https://www.youtube.com/watch?v=iX-QaNzd-0Y';
    this.ffmpegpath = "";
  }
 
  setffmpegPath(){
    var sysname = window.navigator.platform
    var path;
    if (sysname == "MacIntel") {
      path = "bin/mac64/ffmpeg"
    } else if(sysname == "Win64"){
      path = "bin/mac64/ffmpeg.exe"
    } else if(sysname == "Win32"){
      path = 'bin/mac64/ffmpeg'
    };
    console.log("Setting path for ffmpeg file: " + path);
    this.ffmpegpath = path;
    console.log("Set path for ffmpeg file: " + path);
  }

  getAudio(){
    var stream = ytdl(this.url);
    var mp3 = 'music/audio.mp3';
    this.setffmpegPath();
    console.log("Set path for audio");
    var proc = new ffmpeg({
      source: stream //using 'stream' does not work
    });

    proc = proc.setFfmpegPath(this.ffmpegpath).withAudioCodec('libmp3lame').toFormat('mp3').saveToFile(mp3, function(stdout, stderr) {
        console.log('file has been converted succesfully');
    });
  }
}

module.exports = Song;
