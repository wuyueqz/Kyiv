
function prepare_unique_songs_ready(dataset){
  var result = dataset.reduce(function(previous, current){
    if(contains(previous, current)){
      // existed
      return previous;
    }else{
      // found new unique song
      previous.push(current);
      return previous;
    }
  }, []);
  return result;
}


function prepare_unique_songs_sum_streams(dataset){
  var unique_songs_sum_streams = dataset.reduce(function(previous, current){
    if(current.id in previous){
        // existed song
        previous[current.id].streams = parseInt(previous[current.id].streams) + parseInt(current.streams);
    }else{
        // found new unique song
        previous[current.id] = current;
    }
    return previous;
  },{});

  return unique_songs_sum_streams;
}



function contains(dataset, song){
  for(i = 0; i < dataset.length; i++){
    if(dataset[i].id == song.id){
      //contains!
      return true;
    }else{
      //keep searching
    }
  }
  return false;
}

//require Google Charts library
function prepare_ggCharts_data_xy(dataset, firstCol, secondCol, firstColName, secondColName){
    var data = [];
    data.push([firstColName, secondColName]);

    for(i = 0; i < dataset.length; i++){
        data.push([dataset[i][firstCol], dataset[i][secondCol]]);
    } 

    //console.log(data);
    return data
}

function prepare_correlation_rank_data_arrays(dataset, firstCol, secondCol){
    // For using with https://www.npmjs.com/package/correlation-rank
    var array1 = [];
    var array2 = [];

    for(i = 0; i < dataset.length; i++){
        array1.push(parseFloat(dataset[i][firstCol]));
        array2.push(parseFloat(dataset[i][secondCol]));
    }

    return {array1:array1, array2:array2};
}

function prepare_ggCharts_scatterp_from_correlation_data(corObject, firstColName, secondColName){
    var result = [];
    result.push([firstColName, secondColName]);

    for(i = 0; i < corObject.array1.length ; i++){
      result.push([corObject.array1[i], corObject.array2[i]]);
    }
    return result;
}

function prepare_artists_object(dataset){
    var result = dataset.reduce(function(previous, current){
        if(current.artists in previous){
            // existed artist
            if(current.name in previous[current.artists]){
                // the song is already exist in that artists
            }else{
                previous[current.artists].push(current);
            }
        }else{
            // found new artists
            previous[current.artists] = [];
            previous[current.artists].push(current);
        }
        return previous;
    },{});

    return result;
}

function compute_mean_max_min_sd(dataset, computed_variable){
  var sum = dataset.reduce(function(previous, current){
    return previous + parseFloat(current[computed_variable]);
  },0);

  var mean = sum/dataset.length;

  var max = dataset.reduce(function(previous, current){
    if(current[computed_variable] > previous){
      //current's variable is the new max
      return current[computed_variable];
    }else{
      return previous;
    }
  }, 0);

  var min = dataset.reduce(function(previous, current){
    if(current[computed_variable] < previous){
      //current's variable is the new min
      return current[computed_variable];
    }else{
      return previous;
    }
  }, parseFloat(dataset[0][computed_variable]));

  
  var squareDiffs = dataset.map(function(value){
    var diff = value[computed_variable] - mean;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);
  var stdDev = Math.sqrt(avgSquareDiff);

  // console.log(mean);
  // console.log(max);
  // console.log(min);
  // console.log(stdDev);

  // console.log(sum);
  // console.log(dataset.length);

  return {  mean: mean.toFixed(3),
            max: max,
            min: min,
            sd: stdDev.toFixed(3)
  };
}

function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}


function top_streams_songs(dataset){
  var unique_songs_sum_streams = dataset.reduce(function(previous, current){
      if(current.id in previous){
          // existed song
          previous[current.id].streams = parseInt(previous[current.id].streams) + parseInt(current.streams);
      }else{
          // found new unique song
          previous[current.id] = current;
      }
      return previous;
  },{});

  var unique_songs_sum_streams_array = Object.values(unique_songs_sum_streams);
  unique_songs_sum_streams_array.sort(function(a,b){
    if(a.streams > b.streams){
      return -1;
    }
    if(a.streams < b.streams){
      return 1;
    }
    return 0;
  });
  return unique_songs_sum_streams_array;
}

function top_artists_most_songs(dataset){

  for(var key in dataset){
    dataset[key].unshift(key);
  }

  var artists_ready_json_array = Object.values(dataset);
  artists_ready_json_array.sort(function(a,b){
    if(a.length > b.length){
      return -1;
    }
    if(a.length < b.length){
      return 1;
    }
    return 0;
  });

  return artists_ready_json_array;

}


