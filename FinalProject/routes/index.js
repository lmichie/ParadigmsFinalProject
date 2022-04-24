var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

//Quiz set up
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

/* GET home page. */
router.get('/',index.index );
router.get('/overview',index.overview);
router.get('/campus',index.campus);
router.get('/dome',index.dome);
router.get('/grotto',index.grotto);
router.get('/stadium',index.stadium);
router.get('/hesburgh',index.hesburgh);
router.get('/quiz',index.quiz);

module.exports = router;
