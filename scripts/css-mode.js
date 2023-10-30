/* add your JavaScript code here! */

// You will write JavaScript that will:
//
// Wait for the DOM to be loaded

document.addEventListener("DOMContentLoaded", function () {
    // Output a message to the console
   let msg = "My DOM is loaded!";
   console.log(msg);

// Add a "click" listener to the "Toggle Dark/Light Mode" button
// <buton id ="btn-mode">

    let myButton = document.getElementById("btn-mode");

    myButton.addEventListener("click", function () {
        // grab the body, give it a varialbe "myBody"
    let myBody = document.querySelector("body");
    
    myBody.classList.toggle("darkmode");

    });

// When the "click" event happens, toggle the "darkmode" class on the body element

// In writing the solution, I used the following:
//
// addEventListener
// console.log
// getElementById
// querySelector
// classList.toggle
});