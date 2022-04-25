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
});

const grottoButton = document.getElementById('grottoButton');
grottoButton.addEventListener('click', function(e) {
  console.log('Grotto button was clicked');
  location.href = myURL.concat("/grotto")
});

const hesburghButton = document.getElementById('hesburghButton');
hesburghButton.addEventListener('click', function(e) {
  console.log('Hesburgh button was clicked');
  location.href = myURL.concat("/hesburgh") ;
});

const stadiumButton = document.getElementById('stadiumButton');
stadiumButton.addEventListener('click', function(e) {
  console.log('Stadium button was clicked');
  location.href = myURL.concat("/stadium");
});
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', showresults);

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function(e) {
  console.log('Start button was clicked');
  buildQuiz();
});

const likeButton = document.getElementById('likeButton');
likeButton.addEventListener('click', function(e) {
  console.log('Like button was clicked');
  const { value } = e.target
  console.log("VALUE: " + value);

  fetch('http://student04.cse.nd.edu:51036/likes/incrementLikes', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ likeKey: value }) 
  })
});



