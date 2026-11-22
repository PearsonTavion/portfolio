
// 1. A function: a, op and b go in, the answer comes back
function calculate(a, op, b) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else if (op === "*") {
        return a * b;
    } else {
        return a / b;
    }
}

// 2. Read the boxes, calculate, and write the answer
function showAnswer() {
    // Number() turns the text in a box into a number
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const op = document.getElementById("op").value;
    const answer = calculate(a, op, b);
    document.getElementById("result").textContent = answer;
}

// 3. A click on the button runs showAnswer
const button = document.getElementById("calc");
button.addEventListener("click", showAnswer);




// 4. A score goes in, its label comes back
function creditLabel(score) {
    if (score >= 800) {
        return "Exceptional";
    } else if (score >= 740) {
        return "Very Good";
    } else if (score >= 670) {
        return "Good";
    } else if (score >= 580) {
        return "Fair";
    } else {
        return "Poor";
    }
}

// 5. Read the score, find its label, and write it on the page
function showLabel() {
    const score = Number(document.getElementById("score").value);
    const label = creditLabel(score);
    document.getElementById("rating").textContent = label;
}

// 6. A click on the Check button runs showLabel
const checkButton = document.getElementById("check");
checkButton.addEventListener("click", showLabel);

const ranges = [
    { label: "Exceptional", min: 800 },
    { label: "Very Good", min: 740 },
    { label: "Good", min: 670 },
    { label: "Fair", min: 580 }
];

const list = document.querySelector("#ranges");
ranges.forEach(function (r) {
    const li = document.createElement("li");
    li.textContent = `${r.label}: ${r.min} and above`;
    list.appendChild(li);
});


const ScoreBox = document.getElementById("score");
ScoreBox.addEventListener("input", function (event) {
    const score = Number(event.target.value);
    document.getElementById("rating").textContent = creditLabel(score);

});

const themeButton = document.getElementById("theme");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});