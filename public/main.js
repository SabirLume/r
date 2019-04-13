
//set variable to change when clicking a board section
let placedBet;
Array.from(document.querySelectorAll(".board")).forEach(function(element) {
  element.addEventListener('click', function(){
    //changed placedbet variable to be equal to the inside of the section that was clicked
    placedBet= this.innerText
    document.querySelector('chosenBet').innerText = placedBet

//Code for random number generator (core part of game) & win comparisan
    
//have to figure out how to have all the numbers inside of numGen to be available to other functions for comparing and such

function numGen (){
  //random number between 0 and 1 generated and multiplied by 38. we need 38 numbers so that if it goes 37 or higher, we get 37 and we can use 37 to get 00. This number generator will return numbers 0-37, with 37 turning the number
  let num = Math.floor(Math.random()*38);
  let oddEven = "";
  let twelve = "";
  let half="";

  if(num===37){
    num="00"
  }
//can turn this into its own function
//decides if generated number is odd or even
  if(num==="00"){
    oddEven = "even"
  }else if(num%2!==0){
    oddEven = "odd"
  }else if(num%2==0){
    oddEven = "even"
  }
//can turn this into its own function
//decides if generated number is in the 1st, 2nd, or 3rd twelve
  if(num==="00"){
    twelve="1st 12"
  }else if(num<=12){
    twelve="1st 12"
  }else if(num<=24){
    twelve="2nd 12"
  }else if(num>24){
    twelve="3rd 12"
  }
//can turn this into its own function
//decides if generated number is 1-18 or 19-36
  if(num>=1 && num<=18){
    let half="1 to 18"
  }else if(num>=19 && num<=36){
    let half="19 to 36"
  }
}

function result(){
  let result = numGen()

  if(result===""){

  }
