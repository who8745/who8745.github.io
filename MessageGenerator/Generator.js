// Arrays of message parts
const sign = ["Sun", "Moon", "Earth", "Water", "Stars"];
const luck = ["Worst Luck...", "Bad Luck", "Basic Luck", "Good Luck", "Wonderful Luck!"];
const shouldDo = ["Go Outside", "Stay Home", "Stay In Bed", "Have A Cookie", "Bust A Move!"];

// Generates a random number
function randomNum() {
    return Math.floor((Math.random() * 5));
}

// Builds the message that will be outputed
function messageBuilder(){
    let s = "";

    s = "Your sign: " + sign[randomNum()];
    s += "\n" + "Today's Luck: " + luck[randomNum()];
    s += "\n" + "What you should do: " + shouldDo[randomNum()];

    return s;
}

// Outputs the message that was built
console.log(messageBuilder());