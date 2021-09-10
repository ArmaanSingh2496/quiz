var i = 1
var clicks = 0
var questions = [
    'What does HTML stands for ?',
    'What does CSS standsd for ?',
    'What does PHP stand for ?',
    'What does SQL stand for ?',
    'What does XML stand for ?'
];

var opt1 = [
    'Hyper text Processor',
    'Cascading Style Sheet',
    'Hypertext Preprocessor',
    'Stylish Question Language',
    'eXtensible Markup Language'
]

var opt2 = [
    'Hyper Text Markup Language',
    'Colourful Style Sheet',
    'Hypertext Programming',
    'Stylesheet Query Language',
    'eXecutable Multiple Language'
]

var opt3 = [
    'Hyper Text Multiple Language',
    'Computer Style Sheet',
    'Hypertext Preprogramming',
    'Statement Question Language',
    'eXTra Multi-Program Language'
]

var opt4 = [
    'Hyper Tool Multi Language',
    'Common Style Sheet',
    'Hometext Preprocessor',
    'Structured Query Language',
    'eXamine Multiple Language'
]

var ans = [
    'Hyper Text Markup Language',
    'Cascading Style Sheet',
    'Hypertext Preprocessor',
    'Structured Query Language',
    'eXtensible Markup Language',
]

function next_question() {
    if (i < 5) {
        document.getElementById('que_text').innerText = questions[i]
        document.getElementById('option1').innerText = opt1[i]
        document.getElementById('option2').innerText = opt2[i]
        document.getElementById('option3').innerText = opt3[i]
        document.getElementById('option4').innerText = opt4[i]
        i++
        clicks = clicks + 1
        document.getElementById('question_number').innerText = i
        time_left = 15
    }
}
setInterval(timer, 1000);

var time_left = 14;
function timer() {
    if (time_left > -1) {
        document.getElementById('timer_sec').innerHTML = time_left
        time_left = time_left - 1
    }
    if (time_left == -1) {
        next_question();
    }
}
var marks = 0

function select_option_1() {
    if (document.getElementById('option1').innerText == ans[1]) {
        marks++
        document.getElementById('marks_scored').innerText = marks
        next_question();
    }
    else if (document.getElementById('option1').innerText == ans[2]) {
        marks++
        document.getElementById('marks_scored').innerText = marks
        next_question();
    }
    else if (document.getElementById('option1').innerText == ans[4]) {
        marks++
        document.getElementById('marks_scored').innerText = marks
        see_result();
    }
    else {
        next_question();
    }
}

function select_option_2() {
    if (document.getElementById('option2').innerText == ans[0]) {
        marks++
        document.getElementById('marks_scored').innerText = marks
        next_question();
    }
    else if (document.getElementById('option2').innerText == 'eXecutable Multiple Language') {
        see_result();
    }
    else {
        next_question();
        marks = marks + 0

    }

}

function select_option_3() {
    if (document.getElementById('option3').innerText == 'eXTra Multi-Program Language') {
        see_result();
    }
    else {
        next_question();
        marks = marks + 0

    }
}


function select_option_4() {
    if (document.getElementById('option4').innerText == ans[3]) {
        marks++
        document.getElementById('marks_scored').innerText = marks
        next_question();
    }
    else if (document.getElementById('option4').innerText == 'eXamine Multiple Language') {
        see_result();
    }
    else {
        next_question();
        marks = marks + 0

    }
}

function see_result() {
    document.getElementById("result_box").style.display = "block";
    document.getElementById("quiz_box").style.display = "none";
}