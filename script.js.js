 let userscore=0;
let compscore =0;

// score increment
const user_score = document.getElementById("user_score");   
const comp_score = document.getElementById("comp_score");   
const msg = document.getElementById("msg");


const choices = document.querySelectorAll(".choice");

const gencompchoice =() =>{
    const options = ["stone","paper","scissor"];
   const randindx = Math.floor(Math.random()*3);
    return options[randindx];
};


// checking the winner using function
 function checkwin(userchoice,compchoice){
     if(userchoice==="stone" && compchoice==="paper"){
        console.log("computer wins");
        compscore++;
        comp_score.innerHTML =compscore
        msg.innerHTML = `YOU lose ! ${compchoice} beats your ${userchoice} `  ;
        msg.style.backgroundColor ="red";
        
     }
     else if(userchoice==="stone" && compchoice==="scissor"){
        console.log("user wins");
        userscore++;  // line1 
        user_score.innerHTML =userscore;
        msg.innerHTML = `you won ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
     }
     else if(userchoice==="paper" && compchoice==="stone"){
        console.log("user wins");
        userscore++;  // line1 
        user_score.innerHTML =userscore;
        msg.innerHTML = `you won ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
     }
     else if(userchoice==="paper" && compchoice==="scissor"){
        console.log("computer wins");
        compscore++;
        comp_score.innerHTML =compscore
        msg.innerHTML = `YOU lose ! ${compchoice} beats your ${userchoice} `  ;
        msg.style.backgroundColor ="red";
     }
     else if(userchoice==="scissor" && compchoice==="stone"){
        console.log("computer wins");
        compscore++;
        comp_score.innerHTML =compscore
        msg.innerHTML = `YOU lose ! ${compchoice} beats your ${userchoice} `  ;
        msg.style.backgroundColor ="red";
     }
     else if(userchoice==="scissor" && compchoice==="paper"){
        console.log("user wins");
        userscore++;  // line1 
        user_score.innerHTML =userscore;
        msg.innerHTML = `you won ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
     }
};

const playgame = (userchoice)=>{
    console.log("user choice" , userchoice);
    // comp choice 
    const compchoice= gencompchoice();
    console.log("computer choice",compchoice);

    if(userchoice===compchoice){
        console.log("game draw");
    }
    else{
        checkwin(userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice is clicked",userchoice);
        playgame(userchoice);
    });
});