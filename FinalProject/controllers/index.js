//Quiz questions
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

exports.index = function(req, res, next) {
  res.render('index', { about: 'Welcome to our campus!' , location_name:
 'Campus Map'});
}

exports.overview = function(req, res, next) {
  res.render('overview', {about:' '});
}

exports.campus = function(req, res, next) {
   res.render('index', { about: 'Welcome to our campus.', location_name:'Campus'}); 
}

exports.dome = function(req, res, next) {
   console.log("Clicked on dome button")
   res.render('dome', { about: 'The statue of Mary atop the Golden Dome weighs 4,400 pounds and stand 18 feet, 7 inches tall.', location_name:'Dome'});
}

exports.hesburgh = function(req, res, next) {
   console.log("Clicked on hesburgh button")
   res.render('hesburgh', { about: 'Hesburgh Library is home to 14 floors plus one lower level.' , location_name:'Hesburgh'}); 
}

exports.stadium = function(req, res, next) {
   console.log("Clicked on Stadium button")
   res.render('stadium', { about: 'The stadium seat over 80,000 fightin\' Irish Fans!' , location_name:'Stadium'}); 
}

exports.grotto = function(req, res, next) {
   res.render('grotto', { about: 'The Grotto was completed in 1896 and was Father Corby\'s idea.' , location_name:'Grotto'}); 
}

exports.quiz = function(req, res, next) {
   res.render('quiz', {questions}); 
}

