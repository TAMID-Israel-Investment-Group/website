var express = require( 'express' ),
  exphbs  = require( 'express3-handlebars' ),
  bodyParser = require( 'body-parser' ),
  hbsHelpers = require('./lib/helpers'),
  app = express(),
  port = process.env.PORT || 5000,
  handlebars = null;

handlebars = exphbs.create({
defaultLayout: 'base',
  helper: hbsHelpers,
  partialsDir: 'views/partials'
});

app.engine( 'handlebars', handlebars.engine );
app.set( 'view engine', 'handlebars' );
app.use( express.static(__dirname + '/public') );
app.use( bodyParser() );

require( './routes/routes.js' )(app);

app.listen(port, function() {
  console.log("Listening on " + port);
});
