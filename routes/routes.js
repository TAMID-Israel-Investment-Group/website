var data = require('../model/home');

module.exports = function( app ) {
  app.get('/', function( req, res ) {
    res.render('home', {
      title: 'Tamid Investment Group',
      data: data.home
    })
  });
}
