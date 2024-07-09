let userScore = 0;
let compScore = 0;
let user = document.querySelector("#user");
let comp = document.querySelector("#computer");
const button = document.querySelector(".button");
 let userChoice = document.querySelectorAll(".choice");
  button.style.color="white";
 const winner = (Win) =>{
   if(Win){
      button.innerText = "You win"
      userScore++;
      user.innerText=userScore;
      button.style.backgroundColor="green";
   }
   else{
      button.innerText = "You lost"
      compScore++;
      comp.innerText=compScore;
      button.style.backgroundColor="red";
   }

 }
 const genCompchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random =  Math.floor(Math.random()*3);
    return choices[random];
 }
 const game = (userChoice) => {
    const compChoice = genCompchoice();
    if (compChoice===userChoice){
      button.innerText ="Game was Draw"
      button.style.backgroundColor="black";
     
    }
    else{
      let Win = true;
      if(compChoice==="rock"){
         Win = userChoice==="paper"? false : true;
      }
      else if(compChoice==="paper"){
         Win = userChoice==="scissor"? true : false;
      }
      else if(compChoice==="scissor"){
         Win = userChoice==="rock"? true : false;
      }
      winner(Win);
    }
 }
 userChoice.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const choiceId= choice.getAttribute("id");
        console.log("choice was click" , choiceId);
        game(choiceId);
    })
 })