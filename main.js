let direction;
function startGame() {
    let name = prompt("What is your name?");
    alert(`Welcome, ${name}, to Haunted Cemetery Exploration!`);
    main();
}
function main() {
alert("It is Halloween night, and your friends dared you to explore a cemetery which they claim to be haunted.");
let ans1 = +prompt("Do you (1) choose to explore the cemetery, or (2) reject their dare?");

if (ans1 == 1){
    direction = +prompt("Within the cemetery, there is two paths. Would you like to explore (1) the graveyard or (2) the church)")
    choice();
        }
else if(ans1 == 2) {
    alert("Your friends make fun of you, try again.");
    main();
    }
else {
    alert("You did not input a valid answer, please try again.");
    main();
}
}

function graveyard(){
    alert(`So,${name}, you have chosen to explore the graveyard.`);
}
function church(){
    alert(`So ${name}, you have chosen to explore the church`);
}
function choice(){
        if (direction == 1) {
            graveyard();
        }
        else if (direction == 2) {
            church();
        }
        else {
            alert("You did not input a valid answer, please try again.");
            main();
        }
}

startGame();