var audio1 = new Audio("sounds/crash.mp3")
var audio2 = new Audio("sounds/kick-bass.mp3")
var audio3 = new Audio("sounds/snare.mp3")
var audio4 = new Audio("sounds/tom-1.mp3")
var audio5 = new Audio("sounds/tom-2.mp3")
var audio6 = new Audio("sounds/tom-3.mp3")
var audio7 = new Audio("sounds/tom-4.mp3")
var audio=[audio1,audio2,audio3,audio4,audio5,audio6,audio7];
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        audio[i].play();
        buttonAnimation(this.innerHTML);
    });
    document.addEventListener("keydown", function (event) {
        var currentKey = event.key;
        switch (currentKey) {
            case "w":
                audio1.play();
                break;
            case "a":
                audio2.play();
                break;
            case "s":
                audio3.play();
                break;
            case "d":
                audio4.play();
                break;
            case "j":
                audio5.play();
                break;
            case "k":
                audio6.play();
                break;
            case "l":
                audio7.play();
                break;
            default:
                console.log(currentKey);
                break;
        }
        buttonAnimation(currentKey);
    });
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
