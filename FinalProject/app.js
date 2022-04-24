var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var likesRouter = require('./routes/likes');

var app = express();

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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/likes', likesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
