// write your DOM code here.


// DOM element references
const addPassenger = document.querySelector("._addPassenger");
const removePassenger = document.querySelector("._removePassenger")
const passengerCount = document.querySelector(".count")

// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

 addPassenger.addEventListener('click', function(){
     alert('add');
 });
 removePassenger.addEventListener('click', function(){
     alert('remove'); 
 });

