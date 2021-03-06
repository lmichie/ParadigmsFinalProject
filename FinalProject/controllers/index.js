const fetch = require('cross-fetch')

const getLikesURL = 'http://student04.cse.nd.edu:51036/likes/getLikes'

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
   console.log("Clicked on dome button");
   fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'campus' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('index', { about: 'Welcome to our campus!' , location_name:'Campus Map', likeCount: likes});
        })
    })
}

exports.overview = function(req, res, next) {
   console.log("Clicked on dome button");
   fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'overview' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('overview', {about:' ', likeCount: likes});
        })
   })
}

exports.campus = function(req, res, next) {
   console.log("Clicked on dome button");
   fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'campus' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('index', { about: 'Welcome to our campus.', location_name:'Campus', likeCount: likes}); 
        })
    })
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
            res.render('hesburgh', { about: 'Hesburgh Library is home to 14 floors plus one lower level.' , location_name:'Hesburgh', likeCount: likes }); 
        })
    })
}

exports.stadium = function(req, res, next) {
   console.log("Clicked on Stadium button")
    fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'stadium' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('stadium', { about: 'The stadium seat over 80,000 fightin\' Irish Fans!' , location_name:'Stadium', likeCount: likes}); 
        })
    })
}

exports.grotto = function(req, res, next) {
    fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'grotto' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('grotto', { about: 'The Grotto was completed in 1896 and was Father Corby\'s idea.' , location_name:'Grotto', likeCount: likes}); 
        })
    })
}

exports.quiz = function(req, res, next) {
    fetch(getLikesURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likeKey: 'quiz' }) 
    }).then(response => {
        response.json().then(jsonRes => {
            const { likes } = jsonRes.data
            res.render('quiz', questions); 
        })
    })
}

