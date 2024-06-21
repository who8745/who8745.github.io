// Arrays of message parts
const sign = ["Sun", "Moon", "Earth", "Water", "Stars"];
const luck = ["Worst Luck...", "Bad Luck", "Basic Luck", "Good Luck", "Wonderful Luck!"];
const shouldDo = ["Go Outside", "Stay Home", "Stay In Bed", "Have A Cookie", "Bust A Move!"];

// Generates a random number, code gotten by assembly_Wizard on stackoverflow
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));


// Changes the color of the text to a random color
function changeColor(){

    //code gotten by assembly_Wizard on stackoverflow
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;

    return rgb;
}

// Builds the message that will be outputed
function messageBuilder(){
    let s = "";

    s = "Your sign: " + sign[randomBetween(0, 4)];
    s += "<br>" + "Today's Luck: " + luck[randomBetween(0, 4)];
    s += "<br>" + "What you should do: " + shouldDo[randomBetween(0, 4)];

    let messageTarget = document.getElementById("message");

    messageTarget.innerHTML = s;   
    messageTarget.style.color = changeColor(); 
}


// grabs the button data
let eventTarget = document.getElementById("button");

// adds messagebuilder to the onclick event to the button
eventTarget.onclick = messageBuilder;