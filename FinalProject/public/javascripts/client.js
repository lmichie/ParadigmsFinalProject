console.log('Client-side code running');
// LOCAL USE:
//const myURL = "http://localhost:51036";

// STUDENT 04 use:
// This is Prof. Huang's port.  Use your own please!!
 const myURL = "http://student04.cse.nd.edu:51036";

const overviewButton = document.getElementById('overviewButton');
overviewButton.addEventListener('click', function(e) {
  console.log('Zoom button was clicked');
  location.href = myURL.concat("/overview")
});

const quizButton = document.getElementById('quizButton');
quizButton.addEventListener('click', function(e) {
  console.log('Map button was clicked');
  location.href = myURL.concat("/quiz");
});

const campusButton = document.getElementById('campusButton');
campusButton.addEventListener('click', function(e) {
  console.log('Campus button was clicked');
  location.href = myURL.concat("/");
});

const domeButton = document.getElementById('domeButton');
domeButton.addEventListener('click', function(e) {
  console.log('Dome button was clicked');
  location.href = myURL.concat("/dome")
  //document.getElementById("AnimalImage").src ="images/dome.jpg"
  //document.getElementById("p2").innerHTML = "The Golden Dome that sits on top of the Main Building is covered in 23.9-karat gold leaf!";
  //document.getElementById("p1").innerHTML = "Golden Dome"; 
});

const grottoButton = document.getElementById('grottoButton');
grottoButton.addEventListener('click', function(e) {
  console.log('Grotto button was clicked');
  location.href = myURL.concat("/grotto")
  //document.getElementById("AnimalImage").src ="images/monkey.jpg";
  //document.getElementById("p2").innerHTML = "Monkeys live in trees, grasslands, mountains, forests, and on high plains. Each monkey has its own unique fingerprints.";
  //document.getElementById("p1").innerHTML = "Mindy Monkey"; 
});

const hesburghButton = document.getElementById('hesburghButton');
hesburghButton.addEventListener('click', function(e) {
  console.log('Hesburgh button was clicked');
  location.href = myURL.concat("/hesburgh") ;
  //document.getElementById("AnimalImage").src ="images/crocodile.jpg";
  //document.getElementById("p2").innerHTML = "Crocodiles are repitles with sharp teeth.  They can run very fast over short distances.";
  //document.getElementById("p1").innerHTML = "Craig Crocodile"; 
});

const stadiumButton = document.getElementById('stadiumButton');
stadiumButton.addEventListener('click', function(e) {
  console.log('Stadium button was clicked');
  location.href = myURL.concat("/stadium");
  //document.getElementById("AnimalImage").src ="images/stadium.jpg"
  //document.getElementById("p2").innerHTML = "Cows are ruminants, which are cud chewing mammals. Sheep and camels also are ruminants. A cow chews her cud (regurgitated, partially digested food) for up to 8 hours each day.";
  //document.getElementById("p1").innerHTML = "Chloe Cow";  
});

const likeButton = document.getElementById('likeButton');
likeButton.addEventListener('click', function(e) {
  const { value } = e.target
  console.log("VALUE: " + value);

  fetch('http://student04@cse.nd.edu:51036/likes/incrementLikes', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ likeKey: value }) 
  })
});

/*
const likeButton = document.getElementById('likeButton');
likeButton.addEventListener('click', function(e) {
    console.log('Like button was clicked');

    fetch('/clicked', {method: 'POST'})
        .then(function(response) {
            if(response.ok) {
                console.log('Click was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});

setInterval(function() {
    fetch('/clicks', {method: 'GET'})
        .then(function(response) {
            if(response.ok) return response.json();
            throw new Error('Request failed.');
        })
        .then(function(data) {
            document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
        })
        .catch(function(error) {
            console.log(error);
        });
}, 1000);
*/
/*
var map;
var quiz;

function initMap() {
   // Zoo center point
   var potowatami = {
     lat: 41.670241,
     lng: -86.218401
   };
   
   var quiz = new google.quizs.Map(document.getElementById('quiz'), {
   center: potowatami,
   overview: 18,
   quizTypeId: 'satellite'
   });
   
   // Animal locations
   var monkeyCage = {
     lat: 41.670768,
   	 lng: -86.217297
   };
   var camelCage = {
     lat: 41.670088,
   	 lng:  -86.218338
   };   
   var cowCage = {
     lat: 41.670850,
   	 lng: -86.219570
   };   
   var crocCage = {
     lat: 41.669926,
   	 lng: -86.220068
   };
   var marker = new google.quizs.Marker({
	 position: monkeyCage,
	 label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Monkeys' },
     quiz: quiz
   });
   var marker = new google.quizs.Marker({
     position: camelCage,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Camels' },
     quiz: quiz
   });
   var marker = new google.quizs.Marker({
     position: cowCage,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Cows' },
     quiz: quiz
   });
   var marker = new google.quizs.Marker({
     position: crocCage,
     label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Crocodiles' },
     quiz: quiz
   });
}
*/


