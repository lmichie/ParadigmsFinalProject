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

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', showresults);

const questions = [
  {
    question: "Who is the President of Notre Dame?",
    answers: {
      a: "Joe Biden",
      b: "Knute Rockne",
      c: "Father John Jenkins"
    },
    correctAnswer: "c"
  },
  {
    question: "What year was the Universoty founded?",
    answers: {
      a: "1842",
      b: "1953",
      c: "1776"
    },
    correctAnswer: "a"
  },
  {
    question: "Notre Dame is located in what city?",
    answers: {
      a: "New York",
      b: "Chicago",
      c: "Indianpolis",
      d: "South Bend"
    },
    correctAnswer: "d"
  },
  {
    question: "How many residence halls are on campus?",
    answers: {
      a: "51",
      b: "32",
      c: "28"
    },
    correctAnswer: "b"
  },{
    question: "What are Notre Dame's offical colors?",
    answers: {
      a: "Blue and Gold",
      b: "Green and Navy",
      c: "Gold and Green"
    },
    correctAnswer: "a"
  }
 ];

function buildQuiz(){
    const output = [];

    // for each question...
    quesions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

function showResults(){}



