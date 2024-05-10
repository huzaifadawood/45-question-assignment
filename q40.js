function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album = make_album("huzaifa", "devoloper");
console.log(album);
var album1 = make_album("bilal", "2024");
console.log(album1);
var album2 = make_album("basit", "2030", 20);
console.log(album2);
