let userscore = 0;
let compscore = 0;

const user_score = document.getElementById("user_score");
const comp_score = document.getElementById("comp_score");
const msg = document.getElementById("msg");
const resultDiv = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

// Generate computer's choice
const gencompchoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randindx = Math.floor(Math.random() * 3);
    return options[randindx];
};

// Check winner
function checkwin(userchoice, compchoice) {
    if (userchoice === compchoice) {
        msg.innerHTML = "It's a draw!";
        msg.style.backgroundColor = "gray";
        resultDiv.innerText = `Both chose ${userchoice}`;
        return;
    }

    const win =
        (userchoice === "stone" && compchoice === "scissor") ||
        (userchoice === "paper" && compchoice === "stone") ||
        (userchoice === "scissor" && compchoice === "paper");

    if (win) {
        userscore++;
        user_score.innerHTML = userscore;
        msg.innerHTML = `You won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        resultDiv.innerText = `You: ${userchoice} | Computer: ${compchoice}`;
    } else {
        compscore++;
        comp_score.innerHTML = compscore;
        msg.innerHTML = `You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        resultDiv.innerText = `You: ${userchoice} | Computer: ${compchoice}`;
    }
}

// Play one round
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    checkwin(userchoice, compchoice);
};

// Add event listeners to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

// Reset button logic
document.getElementById("reset").addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    user_score.innerHTML = 0;
    comp_score.innerHTML = 0;
    msg.innerHTML = "Place your move";
    msg.style.backgroundColor = "black";
    resultDiv.innerText = "";
});
