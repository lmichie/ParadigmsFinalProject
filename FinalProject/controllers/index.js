const fetch = require('cross-fetch')

const getLikesURL = 'http://localhost:51036/likes/getLikes'

const questions = {
    "questions" :[
        {
            "question": "Who is the President of Notre Dame?",
            "question_type":"multiple-choice",
            "answers": [
                "Joe Biden",
                "Knute Rockne",
                "Father John Jenkins"
            ],
            "correctAnswer": 3,
            "id": "question1"
        },
        {
            "question": "What year was the Universoty founded?",
            "question_type":"multiple-choice",
            "answers": [
                "1842",
                "1953",
                "1776"
            ],
            "correctAnswer": 1,
            "id": "question2"
        },
        {
            "question": "Notre Dame is located in what city?",
            "question_type":"multiple-choice",
            "answers": [
                "Chicago",
                "Indianpolis",
                "South Bend"
            ],
            "correctAnswer": 3,
            "id": "question3"
        },
        {
            "question" : "How many residence halls are on campus?",
            "question_type":"multiple-choice",
            "answers" : [
                "51",
                "32",
                "28"
            ],
            "correctAnswer" : 2,
            "id": "question4"
        },
        {
            "question" : "What are Notre Dame's offical colors?",
            "question_type":"multiple-choice",
            "answers" : [
                "Blue and Gold",
                "Green and Navy",
                "Gold and Green"
            ],
            "correctAnswer": 1,
            "id": "question5"
        }
    ]
};


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
   console.log("Clicked on dome button");
   fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'dome' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('dome', { about: 'The statue of Mary atop the Golden Dome weighs 4,400 pounds and stand 18 feet, 7 inches tall.', location_name:'Dome', likeCount: likes });
        })
    })
}

exports.hesburgh = function(req, res, next) {
   console.log("Clicked on hesburgh button")
   fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'hesburgh' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('hesburgh', { about: 'Hesburgh Library is home to 14 floors plus one lower level.' , location_name:'Hesburgh'}); 
        })
    })
}

exports.stadium = function(req, res, next) {
   console.log("Clicked on Stadium button")
   res.render('stadium', { about: 'The stadium seat over 80,000 fightin\' Irish Fans!' , location_name:'Stadium'}); 
}

exports.grotto = function(req, res, next) {
   res.render('grotto', { about: 'The Grotto was completed in 1896 and was Father Corby\'s idea.' , location_name:'Grotto'}); 
}

exports.quiz = function(req, res, next) {
   res.render('quiz', questions); 
}

