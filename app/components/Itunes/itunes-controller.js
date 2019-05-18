import ItunesService from "./itunes-service.js";
//Private
let _itunesService = new ItunesService()

function _drawSongs(result) {
  //changes button back to GET MUSIC once songs are loaded
  let songs = _itunesService.Songs
  let template = ``
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    console.log('Song', song)
    template += song.Template

  }

  document.getElementById('song-list').innerHTML = template
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(_itunesService.Songs)

}






//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    _drawSongs()
    _itunesService.addSubscriber("songs", _drawSongs)
    // _itunesService.addSubscriber("play", _drawPlay)

  }
  musicPlayer(url) {
    let target = document.getElementById('music-player')
    target.setAttribute("src", url)
  }

  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController