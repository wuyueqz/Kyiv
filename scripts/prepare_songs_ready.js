var fs = require('fs');
var spotify_web_api = require("spotify-web-api-node");

var spotifyApi = new spotify_web_api({
    clientId : '',
    clientSecret : ''
  });


get_songs_ready();

function get_songs_ready(){
    var songs_file_name = 'songs_test_long';
    var songs_ready_file_name;
    // use all methods to get array songs_ready
    var songs = get_songs_from_file(songs_file_name);
    var ids = convert_songs_to_ids(songs);
    var audio_features = get_audio_features_from_ids(ids);
    // var infos = get_info_from_ids(ids);

    // var songs_ready = merge_to_songs_ready(songs, audio_features, infos);
    // save_array_to_json(songs_ready);
}


function get_songs_from_file(file_name){
    // get JSON from text file
    // return the array of songs from JSON
    var data = fs.readFileSync('../data/' + file_name + '.txt');
    var songs = JSON.parse(data);
    //console.log(songs);
    return songs;
}

function convert_songs_to_ids(songs){
    var ids = [];
    // get ids from the array of songs that we get from a CSV file
    // return as the array of only ids (order sensitive)
    songs.forEach(function(item){
        ids.push(item.URL.replace('https://open.spotify.com/track/',''));
    });
    //console.log(ids);
    return ids;
}

function get_audio_features_from_ids(ids){
    var audio_features = [];
    var merged_audio_features = [];
    // use Spotify Web API to get audio features for tracks (max 100 at a time)
    // create an array of audio features with id of that song as index 0
    // return that array

    // Retrieve an access token
    spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        // Set the access token on the API object so that it's used in all future requests
        spotifyApi.setAccessToken(data.body['access_token']);
        //console.log('ids length = '+ids.length);

        for(i = 0; i < ids.length/100; i++){
            // fetch audio features for 100 songs at a time (Spotify API limitation)
            
            var sliced_ids = ids.slice(i*100, (i*100)+100);
            console.log('batch no. ' + i + '================');

            spotifyApi.getAudioFeaturesForTracks(sliced_ids)
            .then(function(data) {
                
                //push each song and its audio features into the array
                for(j = 0; j < 100; j++){
                    if(data.body.audio_features[j] != null){
                        //console.log('j = '+j);
                        //console.log(data.body.audio_features[j].id);
                        audio_features.push({   id:                 data.body.audio_features[j].id,
                                                danceability:       data.body.audio_features[j].danceability,
                                                energy:             data.body.audio_features[j].energy,
                                                key:                data.body.audio_features[j].key,
                                                loudness:           data.body.audio_features[j].loudness,
                                                mode:               data.body.audio_features[j].mode,
                                                speechiness:        data.body.audio_features[j].speechiness,
                                                acousticness:       data.body.audio_features[j].acousticness,
                                                instrumentalness:   data.body.audio_features[j].instrumentalness,
                                                liveness:           data.body.audio_features[j].liveness,
                                                valence:            data.body.audio_features[j].valence,
                                                tempo:              data.body.audio_features[j].tempo,
                                                duration_ms:        data.body.audio_features[j].duration_ms,
                                                time_signature:     data.body.audio_features[j].time_signature
                                            });
                    }
                    if(j == 99){
                        console.log('done updating');
                        //console.log(audio_features);
                        merged_audio_features = merged_audio_features.concat(audio_features);
                        audio_features = [];
                        console.log('arrays merged');

                        //console.log(merged_audio_features);
                    }
                }
            }, function(err) {
                done(err);
            });
        }

        console.log(merged_audio_features.length);
        // console.log(audio_features);
        // return audio_features;
    }).catch(function(err) {
        console.log('Unfortunately, something has gone wrong.', err.message);
    });
}

function get_info_from_ids(ids){
    var infos = [];
    // use Spotify Web API to get track info. Similar to get_audio_features_from_ids
    // create an array of track infos with id of that song as index 0
    // return that array
    return infos;
}

function merge_to_songs_ready(songs, audio_features, infos){
    var songs_ready = [];
    // merge songs, audio_features, and infos into one array
    // return that array
    return songs_ready;
}

function save_array_to_json(songs_ready, file_name){
    // convert songs_ready into json (json_string)
    // write json_string to a text file into the folder data with file_name as the file name

    var dir = '../data/' + file_name + '.txt';
    fs.writeFileSync(dir, songs_ready.toString());
}