// JavaScript source code
var Questions = [
    { question: "Kto był pierwszym królem Polski ?", answerA: "Mieszko I ", answerB: "Bolesław Chrobry", answerC: "Bolesław Krzywousty ", correct: "Bolesław Chrobry", image_src: "img/crown.jpg" },
    { question: "Kto jest autorem tego obrazu ?", answerA: "Leonardo da Vinci", answerB: "Michał Anioł ", answerC: "Jan Matejko ", correct: "Leonardo da Vinci", image_src: "img/vinci.jpg" },
    { question: "Ile to 4+4*5 ?", answerA: "40", answerB: "80", answerC: "24", correct: "24", image_src: "img/kalk.jpg" },
    { question: "Na jakim instrumencie grał Fryderyk Chopin ?", answerA: "Skrzypce ", answerB: "Pianino", answerC: "Fortepian ", correct: "Pianino", image_src: "img/chopin.jpg" }


];

var image = document.getElementById("image");
var textbox = document.getElementById("textbox");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var progressB = document.getElementById("progressbar");
var score = 0;
var status=1;
var answer_number = document.getElementById("answer_number");
var Timer = 0;

var count = Questions.length;
var number = 0;

function answerNumberDisplay()
{

    answer_number.innerHTML = score + "/" + count;

}



var elements = document.getElementsByClassName("answer");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', checkQuestion);
}

function checkQuestion(event) {
    
    var id = event.target.id;
    var text = document.getElementById(id).innerHTML;
    var textCorrect = Questions[number].correct;
      
    if (text === textCorrect) {
        score++;
        NextQuestion();
    }
    else {
        NextQuestion();
    }

   
}





function NextQuestion()
{
    status = 1;
    number++;
    loadQuestion();

}


function EndTime()
{
    
    NextQuestion();
 
}


function makeProgress() { 
    var S = status * 20;
    progressB.innerHTML = `<div id="progress" style="width:${S}px"></div>`;
    status++;
    if (S === 200)
    {       
        EndTime();
       
    }      
}


function loadQuestion() {

    answerNumberDisplay();
    if (number < count) {
        var q = Questions[number];
        image.innerHTML = `<img src=${q.image_src}>`;
        textbox.innerHTML = `<p>${q.question}</p>`;
        choiceA.innerHTML = q.answerA;
        choiceB.innerHTML = q.answerB;
        choiceC.innerHTML = q.answerC;       
       
    }
    else {
        alert("Twój wynik to :" + score );
        number = 0;
        score = 0;
        loadQuestion();
    }

}


function startQuiz()
{
    loadQuestion();

    Timer = setInterval(makeProgress, 1000);
}


startQuiz();

