"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 25 & 26 into an if-else chain.
let alienColor = "green";
// • If the alien is green, print a message that the player earned 5 points.
//versoin 1
if (alienColor === "green") {
    console.log("player earned 5 point");
}
else if (alienColor === "yellow") {
    console.log("players earned 10 points");
}
else if (alienColor === "red") {
    console.log("playes earned 15 points");
}
else {
    console.log("please select right color");
}
//version 2
alienColor = "red";
if (alienColor === "green") {
    console.log("player earned 5 point");
}
else if (alienColor === "yellow") {
    console.log("players earned 10 points");
}
else if (alienColor === "red") {
    console.log("playes earned 15 points");
}
else {
    console.log("please select right color");
}
//version 3
alienColor = "yellow";
if (alienColor === "green") {
    console.log("player earned 5 point");
}
else if (alienColor === "yellow") {
    console.log("players earned 10 points");
}
else if (alienColor === "red") {
    console.log("playes earned 15 points");
}
else {
    console.log("please select right color");
}
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
