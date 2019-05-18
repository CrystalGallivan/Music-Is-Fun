export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    get Template() {
        return `
        <div class="col">
                <div id="songs">
                    <ul>
                        <li class="card" id="albumCard">
                        <img src="${this.albumArt}"/>
                        <h4>${this.artist}</h4>
                        <h8>${this.collection}</h8>
                        <p><b>${this.price}</b></p>
                        <p><b>${this.title}</b></p>
                        <button class="btn-md btn-info "onclick="app.controllers.itunesCtrl.musicPlayer('${this.preview}')">Play</button>
                        </li>
                        
                    </ul>
                </div>
                </div>
            `
    }
}