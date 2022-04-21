exports.index = function(req, res, next) {
  res.render('index', { about: 'Welcome to our zoo!' , animal_name:
 'Zoo Animals'});
}

exports.zoom = function(req, res, next) {
  res.render('zoom', {about:'Zoom Time'});
}

exports.zoo = function(req, res, next) {
   res.render('index', { about: 'Welcome to our zoo.', animal_name:'Zoo Animals'}); 
}

exports.dome = function(req, res, next) {
   console.log("Clicked on dome button")
   res.render('dome', { about: 'The statue of Mary atop the Golden Dome weighs 4,400 pounds and stand 18 feet, 7 inches tall.', location_name:'Dome'});
}

exports.croc = function(req, res, next) {
   console.log("Clicked on croc button")
   res.render('crocodile', { about: 'Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.' , animal_name:'Crocodile'}); 
}

exports.cow = function(req, res, next) {
   console.log("Clicked on COW button")
   res.render('cow', { about: 'Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.' , animal_name:'Cow'}); 
}

exports.grotto = function(req, res, next) {
   res.render('grotto', { about: 'The Grotto was completed in 1896 and was Father Corby\'s idea.' , location_name:'Grotto'}); 
}

exports.map = function(req, res, next) {
   res.render('map', { markers: 'Markers will go here.'}); 
}

