const time = new Date().getHours();
let greeting;
let user = prompt("Hello, what's your name?");
if (time < 12) {
  greeting = `Good morning ${user}`;
} else if (time < 18) {
  greeting = `Good afternoon ${user}`;
} else if(time < 24) {
  greeting = `Good evening ${user}`;
}
document.getElementById("title").innerHTML = `${greeting}, Here is your Drum 🥁 Kit`;


var numOfButtons = document.querySelectorAll(".drum").length;
for( var i = 0; i < numOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
        makeSound(this.innerHTML);
        animation(this.innerHTML);
            
    }
};
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    animation(event.key)
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
}
};
function animation(keyPressed){
    document.querySelector("."+keyPressed).classList.add("pressed");
    setTimeout(
        function(){
            document.querySelector("."+keyPressed).classList.remove("pressed");
        }, 100
    );
};