const input = document.querySelector("input");
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remianChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 150);
console.log(randomNum);
chance = 10;

checkButton.addEventListener("click", () => {
    chance--;
    let inputValue = input.value;
    if (inputValue == randomNum) {
      [guess.textContent, checkButton.disabled] = ["Congratulations", true];
      [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
      if(checkButton.textContent == "Replay"){
        alert("🥳🥳Congratulations🥳🥳");
        window.location.reload();
      }
    }
    else if(inputValue > randomNum && inputValue < 150){
      [guess.textContent, remianChances.textContent] = ["Your guess is High", chance];
      guess.style.color="#333";
      input.value='';
    }
    else if(inputValue < randomNum && inputValue > 0){
        [guess.textContent, remianChances.textContent] = ["Your guess is Low", chance];
        guess.style.color="#333";
        input.value='';
    }
    else{
        [guess.textContent, remianChances.textContent] = ["Your number is invalid", chance];
        guess.style.color="#DE0611";
        input.value='';
    }

    if(chance == 0){
        [checkButton.textContent, input.disabled , inputValue] = ["Replay",true, ""];
        [guess.textContent, guess.style.color] = ["You lost the Game", "#DE0611"];
    }
    if (chance < 0) {
        window.location.reload();
    }
});

