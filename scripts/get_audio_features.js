var SpotifyWebApi = require("spotify-web-api-node");


var spotifyApi = new SpotifyWebApi({
  clientId : '',
  clientSecret : ''
});


var idListTest = ['1cTZMwcBJT0Ka3UJPXOeeN', '5SxkdsY1ufZzoq9iXceLw9', '2XW4DbS6NddZxRPm5rMCeY'];
var audioFeaturesTest;

// spotifyApi.getAudioFeaturesForTracks(idListTest)
//   .then(function(data) {
//     console.log(data.body);
//   }, function(err) {
//     done(err);
//   });


// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    // Set the access token on the API object so that it's used in all future requests
    spotifyApi.setAccessToken(data.body['access_token']);
    // Get the most popular tracks by David Bowie in Great Britain
    return spotifyApi.getAudioFeaturesForTracks(idListTest)
  }).then(function(data) {
    console.log(data.body);
  }).catch(function(err) {
    console.log('Unfortunately, something has gone wrong.', err.message);
  });


// // Retrieve an access token
// spotifyApi.clientCredentialsGrant()
//   .then(function(data) {
//     // Set the access token on the API object so that it's used in all future requests
//     spotifyApi.setAccessToken(data.body['access_token']);

//     // Get the most popular tracks by David Bowie in Great Britain
//     return spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
//   }).then(function(data) {
//     console.log('The most popular tracks for David Bowie is..');
//     console.log('Drum roll..')
//     console.log('...')

//     /*
//      * 1. Space Oddity - 2009 Digital Remaster (popularity is 51)
//      * 2. Heroes - 1999 Digital Remaster (popularity is 33)
//      * 3. Let's Dance - 1999 Digital Remaster (popularity is 20)
//      * 4. ...
//     */
//     data.body.tracks.forEach(function(track, index) {
//       console.log((index+1) + '. ' + track.name + ' (popularity is ' + track.popularity + ')');
//     });

//   }).catch(function(err) {
//     console.log('Unfortunately, something has gone wrong.', err.message);
//   });
