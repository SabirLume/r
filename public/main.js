
//set variable to change when clicking a board section
let placedBet;
Array.from(document.querySelectorAll(".board")).forEach(function(element) {
  element.addEventListener('click', function(){
    //changed placedbet variable to be equal to the inside of the section that was clicked
    placedBet= this.innerText
    document.querySelector('chosenBet').innerText = placedBet
  }
}



//Code for random number generator (core part of game) & win comparisan
function randNum (){
  //random number between 0 and 1 generated and multiplied by 38. we need 38 numbers so that if it goes 37 or higher, we get 37 and we can use 37 to get 00. This number generator will return numbers 0-37, with 37 turning the number
  let num = Math.floor(Math.random()*38)
  if(num===37){
    num="00"
  }
  return num
}







fetch('result', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    'profit': parseInt(placedBet),
    'wins': parseInt(wins),
    'losses': parseInt(losses)
  })
})
.then(response => {
  if (response.ok) return response.json();
})
.then(data => {
  console.log(data)
});
}
