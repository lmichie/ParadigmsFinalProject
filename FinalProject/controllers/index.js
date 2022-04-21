exports.index = function(req, res, next) {
  res.render('index', { about: 'Welcome to our campus!' , location_name:
 'Campus Map'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.campus = function(req, res, next) {
   res.render('index', { about: 'Welcome to our campus.', location_name:'Campus'}); 
}

exports.dome = function(req, res, next) {
   console.log("Clicked on dome button")
   res.render('dome', { about: 'The statue of Mary atop the Golden Dome weighs 4,400 pounds and stand 18 feet, 7 inches tall.', location_name:'Dome'});
}

exports.hes = function(req, res, next) {
   console.log("Clicked on hes button")
   res.render('hesburgh', { about: 'Hesburgh Library is home to 14 floors plus one lower level.' , location_name:'Hesburgh'}); 
}

exports.stadium = function(req, res, next) {
   console.log("Clicked on Stadium button")
   res.render('stadium', { about: 'The stadium seat over 80,000 fightin\' Irish Fans!' , location_name:'Stadium'}); 
}

exports.grotto = function(req, res, next) {
   res.render('grotto', { about: 'The Grotto was completed in 1896 and was Father Corby\'s idea.' , location_name:'Grotto'}); 
}

exports.map = function(req, res, next) {
   res.render('map', { markers: 'Markers will go here.'}); 
}

