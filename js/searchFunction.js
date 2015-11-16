var search = require('youtube-search');
// var song = require('./audioLoader');
var opts = {
  maxResults: 10,
  key: ''
};

function search_song(){
  var searchval = document.getElementById('searchfield').value;
  var resultlist;
  var resultstring = searcher(searchval);
  // var output = generateSongList(resultlist);
  // 
  console.log(resultstring);

}

function generateSongList(resultlist){
  var output = "<h3>Results</h3><div class='list-group'>";
  for (var i = 0; i < resultlist.length; i++) {
    if (resultlist[i].kind == "youtube#video") {
     output+= "<button type='button' class='list-group-item' value='" + resultlist[i].link + "' onclick='playsong(this)'>" + resultlist[i].title + "</button>";   
   } else {
    console.log('no video found');
   }
   
 }
 output += "</div>";
 console.log(output);
 $("#appbody").append(output);
}

function searcher(searchval){
  search(searchval, opts, function(err, results) {
    if(err) return console.log(err);
    resultlist = results;
    return generateSongList(resultlist);
  })
}

function playsong(item) {

    var fullname = item.innerHTML;
    var index = fullname.indexOf(" - ") || fullname.indexOf(" / ");  // Gets the first index where a space occours
    var artist = fullname.substr(0, index); // Gets the first part
    var songname = fullname.substr(index + 3);  // Gets the text part
    song = new Song();
    song = song.getAudio(item.value);
    var audioplayer;
    // $( '.audioplayer' ).remove();
    $( function() { $( 'audio' ).audioPlayer(); } );
    $("#songname").text(songname);
    $("#artistname").text(artist);
}