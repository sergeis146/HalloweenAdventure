//Calls out nessecary variables for the code
let direction;
let churchChoice;
let graveChoice;
let weapon;
let outcome;
let name;
//main game code
function startGame() {
    name = prompt("What is your name?");
    alert(`Welcome, ${name}, to Haunted Cemetery Exploration!`);
    main();
}
//starter game code
function main() {
alert("It is Halloween night 🎃, and your friends dared you to explore a cemetery 🪦 which they claim to be haunted.");
let ans1 = +prompt("Do you (1) choose to explore the cemetery, or (2) reject their dare?");

if (ans1 == 1){
    direction = +prompt("Within the cemetery, there is two paths. Would you like to explore (1) the graveyard 🪦 or (2) the church ⛪.")
    choice();
        }
else if(ans1 == 2) {
    alert("Your friends 👥 make fun of you, try again.");
    main();
    }
else {
    alert("You did not input a valid answer, please try again.");
    main();
}
endGame();
}
//starts off the graveyard path
function graveyard(){
    alert(`So,you have chosen to explore the graveyard.`);
    alert(`As you enter the graveyard, you see a gravestone that says ${name} on it.`)
    graveChoice = +prompt("Do you (1) explore your own gravestone, or (2) run away because you are scared?")
    if (graveChoice == 1){
        alert("You explore your gravstone, and are shocked to see that it has the correct birthyear. You get scared and try to leave, but feel something grasp at your foot. You turn to see an arm sticking out of the ground. The arm pulls you into the ground, and you rest peacefully in your grave for the rest of eternity.");
    }
    else if (graveChoice == 2){
        alert("You turn to run away, but you trip and hit your head, causing you to fall unconscious. It appears your grave will be useful.");
    }
    else{
        alert("It appears that you did not put a proper response, please try again.")
        graveyard();
    }
}
//starts off the church path
function church(){
    alert(`So ${name}, you have chosen to explore the church`);
    alert("You enter the church, walking you hear a loud thud in the back of the church")
    churchChoice = +prompt("Yu jump from how scared you are, do you (1) keep walking, (2) run away, or (3) take something off the floor and fight")
    church2Choice();
}
//gives the player the correct path based on what they chose
function choice(){
        if (direction == 1) {
            graveyard();
        }
        else if (direction == 2) {
            church();
            
        }
        else if (direction == 3) {
            
        }
        else {
            alert("Sorry, I don't think you can escape fate, try again.");
            main();
        }

}
//Gives final church choices
function church2Choice(){
    if (churchChoice == 1){
        alert(`You keep walking, you hear someone say ${name}, you black out, the next thing you know you are lying in a hospital with all your friends sitting worried.`)
        endGame();
    }

    else if (churchChoice == 2) {
        alert(`You run out of the church, someone behind you yells ${name} soon you see the exit of the graveyard, the door is closed, your friends left you.`)
        endGame();
    }
    else if (churchChoice == 3) {
        churchFight();
    }
    else {
        alert("You did not input a valid answer, please try again.");
        church();
    }
}
//Function used to end the game
function endGame(){
    alert("Thank you for playing!" );
}
function churchFight() {
    weapon = prompt(`${name}, what do you want to pick up from the shelf to fight? A shovel, flashlight, stick, broken laptop, or a painting?`);
    outcome = Math.round(Math.random() * 4) + 1;

    if (outcome == 1) {
        alert(`You picked up the ${weapon} and tried to fight, but it snaps in half. You stand there, waiting for your end. The creature leaps onto you, and the next thing you know, you are lying in a hospital bed, your friends surrounding you.`);
        endGame();
    } else if (outcome == 2) {
        alert(`You picked up the ${weapon} and attacked. You hit the creature in the head, and it falls down; you turn around and run away.`);
        endGame();
    } else if (outcome == 3) {
        alert(`You picked up the ${weapon} and leaped onto the creature, but nothing happens; he just growls. He picks you up and carries you over to a gravestone with your name written on it. He throws you in and scratches today's date.`);
        endGame();
    } else if (outcome == 4) {
        alert(`You picked up the ${weapon}, but before you know it, he leaps onto you. You hold out your ${weapon} and try to defend. The creature keeps saying ${name}, but you are lucky and stab him. You run off and see that your friends ran off scared. You get home safely.`);
        endGame();
    }
}

//Starts the game
startGame();
