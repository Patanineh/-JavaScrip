//Parent class
class Media {
    constructor(info) {
        this.publishDate = info.publishDate; //info.publishDate oop
        this.name = info.name;
    }
}

//chid class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDate: 1975,
});

console.log(mySong);