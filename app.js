console.log("HELLO ROMEO PLATOON!")

secretNumber = Math.floor(Math.random() * 19) + 1
guesses = 0

function guessingGame(){
    
    if(guesses == 6){
        document.getElementById("hint").innerHTML = "No more chances! Sea ya later! (✧∀✧)"
        document.getElementById("chances").innerHTML--
        setTimeout(function(){
            window.location.reload(1);
        }, 5000);
        let element = document.getElementById("game-over")
        element.classList.add("water")
    }
    else if(document.getElementById("answer").value > 20){
        guesses++
        document.getElementById("hint").innerHTML = 'Wasting your guesses, huh? ( ｡•́‿•̀｡)'
        document.getElementById("chances").innerHTML--
    }
    else if(document.getElementById("answer").value < secretNumber){
        guesses++
        document.getElementById("hint").innerHTML = 'Too low!! :D'
        document.getElementById("chances").innerHTML--
    }
    else if(document.getElementById("answer").value > secretNumber){
        guesses++
        document.getElementById("hint").innerHTML = 'Hey! Too high! >:o'
        document.getElementById("chances").innerHTML--
    }
    else if(document.getElementById("answer").value == secretNumber){
        document.getElementById("hint").innerHTML = "Huh? That's the answer ._."
        setTimeout(function(){
            window.location.reload(1);
        }, 5000);
    }
}