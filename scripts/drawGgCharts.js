// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // var unique_songs_ready_json = prepare_unique_songs_ready(songs_ready_json);
        // console.log(JSON.stringify(unique_songs_ready_json));

        data_danceability = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','danceability','Song Name','Danceability'));
        data_energy = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','energy','Song Name','Energy'));
        data_key = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','key','Song Name','Key'));
        data_loudness = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','loudness','Song Name','Loudness'));
        data_mode = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','mode','Song Name','Mode'));
        data_speechiness = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','speechiness','Song Name','Speechiness'));
        data_acousticness = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','acousticness','Song Name','Acousticnss'));
        data_instrumentalness = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','instrumentalness','Song Name','Instrumentalness'));
        data_liveness = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','liveness','Song Name','Liveness'));
        data_valence = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','valence','Song Name','Valence'));
        data_tempo = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','tempo','Song Name','Tempo'));
        data_duration_ms = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','duration_ms','Song Name','Duration (ms)'));
        data_time_signature = google.visualization.arrayToDataTable(prepare_ggCharts_data_xy(unique_songs_ready_json,'name','time_signature','Song Name','Time Signature'));

        data_scatterp_danceability = google.visualization.arrayToDataTable(prepare_ggCharts_scatterp_from_correlation_data(prepare_correlation_rank_data_arrays(
          unique_songs_ready_json, 'danceability', 'streams')),'Danceability','Streams');

        var options_scatterp_danceability =   {
                          pointSize: 1,
                          hAxis: {title: 'Danceability'},
                          vAxis: {title: 'Streams'},
                          legend: 'none',
                          colors:['#FF3664'],

                          animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              logScale:true,
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#121314'
                
                            },

                            hAxis:{
                              logScale:true,
                              gridlines:{
                                color: '#121314'
                              },
                              baselineColor:'#121314'
                            },
                            backgroundColor	:'#121314'
                        };

        // Set chart options
                        var options_danceability =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_time_signature =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_energy =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_key =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_loudness =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_mode =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              titleTextStyle:{
                                color:'#fff'
                              }
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                            }
                        };
                        var options_speechiness =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_acousticness =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_instrumentalness =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff',
                              scaleType:'mirrorLog'
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.01,
                              maxNumBuckets: 200
                            }
                        };
                        var options_liveness =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_valence =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_tempo =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
                        var options_duration_ms =   {
                            legend: { position: 'none' },
                            colors: ['#4285F4'],

                            animation:{
                              startup:true,
                              duration: 1000,
                              easing:'inAndOut'
                            },

                            tooltip:{
                              isHtml: true,
                              textStyle:{
                                fontName:'brandingmedium',
                                fontSize:16
                              }
                            },

                            chartArea: {
                              width:'100%',
                              height:'100%'
                            },

                            dataOpacity: 0.9,

                            vAxis:{
                              gridlines:{
                                color: '#3A3A3A'
                              },
                              baselineColor:'#fff'
                
                            },

                            hAxis:{
                              
                            },

                            bar: { gap: 0 },
                            backgroundColor	:'#121314',
                            histogram: {
                              bucketSize: 0.001,
                              maxNumBuckets: 200
                            }
                        };
        

        // Instantiate and draw our chart, passing in some options.
        var chart_danceability = new google.visualization.Histogram(document.getElementById('chart_danceability'));
        var chart_energy = new google.visualization.Histogram(document.getElementById('chart_energy'));
        var chart_key = new google.visualization.Histogram(document.getElementById('chart_key'));
        var chart_loudness = new google.visualization.Histogram(document.getElementById('chart_loudness'));
        var chart_mode = new google.visualization.Histogram(document.getElementById('chart_mode'));
        var chart_speechiness = new google.visualization.Histogram(document.getElementById('chart_speechiness'));
        var chart_acousticness = new google.visualization.Histogram(document.getElementById('chart_acousticness'));
        var chart_instrumentalness = new google.visualization.Histogram(document.getElementById('chart_instrumentalness'));
        var chart_liveness = new google.visualization.Histogram(document.getElementById('chart_liveness'));
        var chart_valence = new google.visualization.Histogram(document.getElementById('chart_valence'));
        var chart_tempo = new google.visualization.Histogram(document.getElementById('chart_tempo'));
        var chart_duration_ms = new google.visualization.Histogram(document.getElementById('chart_duration_ms'));
        var chart_time_signature = new google.visualization.Histogram(document.getElementById('chart_time_signature'));

        var chart_scatterp_danceability = new google.visualization.ScatterChart(document.getElementById('chart_scatterp_danceability'));

        chart_danceability.draw(data_danceability, options_danceability);
        chart_energy.draw(data_energy, options_energy);
        chart_key.draw(data_key, options_key);
        chart_loudness.draw(data_loudness, options_loudness);
        chart_mode.draw(data_mode, options_mode);
        chart_speechiness.draw(data_speechiness, options_speechiness);
        chart_acousticness.draw(data_acousticness, options_acousticness);
        chart_instrumentalness.draw(data_instrumentalness, options_instrumentalness);
        chart_liveness.draw(data_liveness, options_liveness);
        chart_valence.draw(data_valence, options_valence);
        chart_tempo.draw(data_tempo, options_tempo);
        chart_duration_ms.draw(data_duration_ms, options_duration_ms);
        chart_time_signature.draw(data_time_signature, options_time_signature);

        chart_scatterp_danceability.draw(data_scatterp_danceability, options_scatterp_danceability);

        var computed_danceability = compute_mean_max_min_sd(unique_songs_ready_json,'danceability');
        document.getElementById("computed_danceability_mean").innerHTML = computed_danceability.mean;
        document.getElementById("computed_danceability_max").innerHTML = computed_danceability.max;
        document.getElementById("computed_danceability_min").innerHTML = computed_danceability.min;
        document.getElementById("computed_danceability_sd").innerHTML = computed_danceability.sd;

        var computed_energy = compute_mean_max_min_sd(unique_songs_ready_json,'energy');
        document.getElementById("computed_energy_mean").innerHTML = computed_energy.mean;
        document.getElementById("computed_energy_max").innerHTML = computed_energy.max;
        document.getElementById("computed_energy_min").innerHTML = computed_energy.min;
        document.getElementById("computed_energy_sd").innerHTML = computed_energy.sd;

        var computed_loudness = compute_mean_max_min_sd(unique_songs_ready_json,'loudness');
        
        document.getElementById("computed_loudness_mean").innerHTML = computed_loudness.mean;
        // document.getElementById("computed_loudness_max").innerHTML = computed_loudness.max;
        document.getElementById("computed_loudness_max").innerHTML = -0.02;
        // document.getElementById("computed_loudness_min").innerHTML = computed_loudness.min;
        document.getElementById("computed_loudness_min").innerHTML = -34.625;
        document.getElementById("computed_loudness_sd").innerHTML = computed_loudness.sd;

        var computed_speechiness = compute_mean_max_min_sd(unique_songs_ready_json,'speechiness');
        document.getElementById("computed_speechiness_mean").innerHTML = computed_speechiness.mean;
        document.getElementById("computed_speechiness_max").innerHTML = computed_speechiness.max;
        document.getElementById("computed_speechiness_min").innerHTML = computed_speechiness.min;
        document.getElementById("computed_speechiness_sd").innerHTML = computed_speechiness.sd;

        var computed_acousticness = compute_mean_max_min_sd(unique_songs_ready_json,'acousticness');
        document.getElementById("computed_acousticness_mean").innerHTML = computed_acousticness.mean;
        document.getElementById("computed_acousticness_max").innerHTML = computed_acousticness.max;
        document.getElementById("computed_acousticness_min").innerHTML = computed_acousticness.min;
        document.getElementById("computed_acousticness_sd").innerHTML = computed_acousticness.sd;

        var computed_instrumentalness = compute_mean_max_min_sd(unique_songs_ready_json,'instrumentalness');
        document.getElementById("computed_instrumentalness_mean").innerHTML = computed_instrumentalness.mean;
        document.getElementById("computed_instrumentalness_max").innerHTML = computed_instrumentalness.max;
        document.getElementById("computed_instrumentalness_min").innerHTML = computed_instrumentalness.min;
        document.getElementById("computed_instrumentalness_sd").innerHTML = computed_instrumentalness.sd;

        var computed_liveness = compute_mean_max_min_sd(unique_songs_ready_json,'liveness');
        document.getElementById("computed_liveness_mean").innerHTML = computed_liveness.mean;
        document.getElementById("computed_liveness_max").innerHTML = computed_liveness.max;
        document.getElementById("computed_liveness_min").innerHTML = computed_liveness.min;
        document.getElementById("computed_liveness_sd").innerHTML = computed_liveness.sd;

        var computed_valence = compute_mean_max_min_sd(unique_songs_ready_json,'valence');
        document.getElementById("computed_valence_mean").innerHTML = computed_valence.mean;
        document.getElementById("computed_valence_max").innerHTML = computed_valence.max;
        document.getElementById("computed_valence_min").innerHTML = computed_valence.min;
        document.getElementById("computed_valence_sd").innerHTML = computed_valence.sd;

        var computed_tempo = compute_mean_max_min_sd(unique_songs_ready_json,'tempo');
        document.getElementById("computed_tempo_mean").innerHTML = computed_tempo.mean;
        // document.getElementById("computed_tempo_max").innerHTML = computed_tempo.max;
        document.getElementById("computed_tempo_max").innerHTML = 212.11;
        // document.getElementById("computed_tempo_min").innerHTML = computed_tempo.min;
        document.getElementById("computed_tempo_min").innerHTML = 46.71;
        document.getElementById("computed_tempo_sd").innerHTML = computed_tempo.sd;
        
        var computed_duration_ms = compute_mean_max_min_sd(unique_songs_ready_json,'duration_ms');
        document.getElementById("computed_duration_ms_mean").innerHTML = computed_duration_ms.mean;
        // document.getElementById("computed_duration_ms_max").innerHTML = computed_duration_ms.max;
        document.getElementById("computed_duration_ms_max").innerHTML = 519825;
        // document.getElementById("computed_duration_ms_min").innerHTML = computed_duration_ms.min;
        document.getElementById("computed_duration_ms_min").innerHTML = 46605;
        document.getElementById("computed_duration_ms_sd").innerHTML = computed_duration_ms.sd;

        /// done with charts ==================
        // var computed_danceability = compute_mean_max_min_sd(unique_songs_ready_json,'danceability');
        // document.getElementById("computed_danceability").innerHTML = 'Danceability -> Mean: ' + computed_danceability.mean + ', Max: ' 
        // + computed_danceability.max + ', Min: ' + computed_danceability.min + ', Standard Deviation: ' + computed_danceability.sd;


      }