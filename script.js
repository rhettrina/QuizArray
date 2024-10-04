const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector('.timer .timer_sec');
const usernameInput = document.querySelector(".username_input");

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter your name to continue!");
        return;
    }

    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    shuffleArray(questions);
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let userScore = 0;
let maxQuestions = 10;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector('.result_box');
const result_quiz = result_box.querySelector('.buttons .restart');
const quit_quiz = result_box.querySelector('.buttons .quit');

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

result_quiz.onclick = () => {
    result_box.classList.remove("activeResult");
    quiz_box.classList.add("activeQuiz");

    que_count = 0;
    que_numb = 1;
    timeValue = 15;
    userScore = 0;
    shuffleArray(questions);
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    next_btn.style.display = 'none';
}

quit_quiz.onclick = () => {
    window.location.reload();
}

next_btn.onclick = () => {
    if (que_count < maxQuestions - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        next_btn.style.display = 'none';
    } else {
        console.log("que completed");
        showResultBox();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = `<span>${questions[index].question}</span>`;

    let options = [...questions[index].options];
    shuffleArray(options);

    let option_tag = options.map(option => `<div class="option"><span>${option}</span></div>`).join('');
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = `<div class="icon tick"><i class="fa-solid fa-check"></i></div>`;
let crossIcon = `<div class="icon cross"><i class="fa fa-times"></i></div>`;

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add('correct');
        console.log("correct");
        answer.insertAdjacentHTML('beforeend', tickIcon);
    } else {
        answer.classList.add('incorrect');
        console.log("wrong");
        answer.insertAdjacentHTML('beforeend', crossIcon);
    }

    for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("class", "option correct");
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled');
    }
    next_btn.style.display = 'block';
}

function showResultBox() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
        let scoreTag = `<span>Congrats! You got <p>${userScore}</p> out of <p>${maxQuestions}</p></span>`;
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = `<span>Nice! You got <p>${userScore}</p> out of <p>${maxQuestions}</p></span>`;
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = `<span>Sorry, you got <p>${userScore}</p> out of <p>${maxQuestions}</p></span>`;
        scoreText.innerHTML = scoreTag;
    }

    saveHighScore(userScore);
    displayHighScores();
}

function saveHighScore(score) {
    const username = usernameInput.value.trim();
    const newScore = { username: username, score: score, date: new Date().toLocaleDateString() };

    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
    const highScoresList = result_box.querySelector(".high_scores");
    highScoresList.innerHTML = highScores
        .map(score => `<li>${score.date} - ${score.username}: ${score.score}</li>`)
        .join('');
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                }
            }

            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add('disabled');
            }
            next_btn.style.display = 'block';
        }
    }
}

function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCounting = `<span><p>${index}</p> of <p>${maxQuestions}</p> questions</span>`;
    bottom_ques_counter.innerHTML = totalQuesCounting;
}
