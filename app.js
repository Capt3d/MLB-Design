var score = 0;
var questionIndex = 0;
var questions = [
 {
   question: 'Who was the AL MVP?',
   choices: ['Mike Trout', 'Jose Altuve', 'Mookie Betts', 'Manny Machado'],
   correct: 'Mike Trout'
 },
 {
   question: 'Who was the NL MVP?',
   choices: ['Nolan Arenado', 'Kris Bryant', 'Justin Turner', 'Buster Posey'],
   correct: 'Kris Bryant'
 },
  {
    question: 'Who was the AL Cy Young Winner?',
    choices: ['Justin Verlander', 'Zach Britton', 'Chris Sale', 'Rick Porcello'],
    correct: 'Rick Porcello'
  },
  {
     question: 'Who was the NL Rookie of the Year?',
     choices: ['Corey Seager', 'Kenta Maeda', 'Trea Turner', 'Julio Urias'],
     correct: 'Corey Seager'
  },
  {
    question: 'Who won the 2016 World Series?',
    choices: ['Cleveland Indians', 'Los Angeles Dodgers', 'Chicago Cubs', 'Toronto Blue Jays'],
    correct: 'Chicago Cubs'
  },
];

var $quiz = $('.quiz');

function init() {
 $quiz.html(
   '<div class="init_game"><h1>MLB 2016 Quiz</h1><button class="start_game">Start</button></div>'
 );
}

function game() {
 $quiz.html(
   '<span class="score"></span><h3 class="question_title"></h3><ul class="list-choices"></ul>'
 );
 generate_question();
 listenForChoices();
}

function generate_question() {
    
if (questionIndex === questions.length) {
   alert('Congrats! Your final score is ' + score);
    return;
 }
    
var $title = $quiz.find('.question_title');
var $ul = $quiz.find('.list-choices');
var $score = $quiz.find('.score');

$score.text('Your score is ' + score + ' out of ' +questions.length);

$title.text(questions[questionIndex].question);

for (var i = 0; i < questions[questionIndex].choices.length; i++) {
  $ul.append('<li>' + questions[questionIndex].choices[i]);
}
};

init();

var correctAnswer = questions[questionIndex].correct;

function listenForChoices() {
 $('.list-choices').on('click', 'li', function() {
   var choice = $(this).text();
   if (choice === questions[questionIndex].correct) {
     $(this).parent().empty();
     questionIndex++;
     score++;
     generate_question();
     console.log('Answer is Correct!');
   } else {
     console.log('Answer is Incorrect!');
     $(this).parent().empty();
     questionIndex++;
     generate_question();
   }
 });
}

$('.start_game').click(game);
$('questions.choices').hover(bold);


