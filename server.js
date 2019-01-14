  /* Load the HTTP library */
  var express = require('express');
  var app = express();

  /* Create an HTTP server to handle responses */

  //app.use('/static', express.static('public'));
  app.use(express.static('static'))
  //app.use(express.static('scripts'))
  app.get('/', function(req, res){
    res.send('Hello World!');
  })


  app.listen(8080,function(){
    console.log('ready at 8080');
  })

