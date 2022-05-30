// write your DOM code here.


// DOM element references
const addPassenger = document.querySelector(".join_queue");
const removePassenger = document.querySelector(".leave_queue")
const passengerCount = document.querySelector(".count")
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events
 addPassenger.addEventListener("click", function(){
     alert('working');
 });
 removePassenger.addEventListener("click", function(){
     alert("hmm")
 });
