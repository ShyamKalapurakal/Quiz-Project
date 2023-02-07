var questionBank = [
    {
        question : 'Which of the first web browser invented in 1990?',
        option : ['Internet Explorer','Mosaic','Mozilla','Nexus'],
        answer : 'Nexus'
    },
    {
        question : 'Which of the following programming language is used to create programs like applets?',
        option : ['COBOL','C Language','Java','BASIC'],
        answer : 'Java'
    },
    {
        question : 'Firstcomputer virus is known as?',
        option : ['Rabbit','Creeper Virus','Elk Cloner','SCA Virus'],
        answer : 'Creeper Virus'
    },
    {
        question : 'Which one programming language is exclusively used fo artifical intelligence?',
        option : ['C','Java','J2EE','Prolog'],
        answer : 'Prolog'
    },
    {
        question : 'Which of the following is not a database management software?',
        option : ['MySQL','Oracle','Sybase','COBOL'],
        answer : 'COBOL'
    }
    
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scoreboard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions

function displayQuestion() {
    for ( var a = 0; a < span.length; a++ ) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    start.innerHTML = "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}



//function to calculate scores
function calcScore(e) {
    if(e.innerHTML === questionBank[i].answer && score < questionBank.length)
    {
        score = score+1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion() {
    if(i < questionBank.length-1)
    {
        i = i+1;
        displayQuestion();
    }
    else{
        points.innerHTML = score+ '/'+ questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';   
    }
}


//click events to next button
next.addEventListener('click',nextQuestion);

//back to quiz button event
function backToQuiz() {
    location.reload();
}


//function to check answers
function checkAnswer(){
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scorecard.style.display = 'none';
    for ( var a = 0; a < questionBank.length; a++ )
    {
        var list = document.createElement('li');    
        list.innerHTML = questionBank[a].answer;
        answers.appendChild[list];
    }
}

displayQuestion();
