//set variable to change when clicking a board section
document.addEventListener("DOMContentLoaded", () => {

  let placedBet;
  let actualBet;
  let winnings;
  let wins=0;
  let losses=0;
  let el;
  let profit=0;

  const userBankElement = document.getElementById('userBank');
  const arrayOfBoard = document.getElementsByTagName('div');
  const betClick = document.querySelector('#betClick');
  const redBlack =  ["black", "red"];

  //changed placedbet variable to be equal to the inside of the section that was clicked

  Array.from(document.querySelectorAll(".board")).forEach((element) => {
    element.addEventListener('click', () => {
      placedBet = element.innerText;
      el = element;
      document.querySelector('.chosenBet').innerText = placedBet;
      console.log(`This is the players bet.. should show in screen below playing table ${placedBet}`);
    });
  });

  betClick.addEventListener('click', () => {
    const betInput = document.querySelector('#betInput').value;
    actualBet = parseFloat(betInput);
    gameLogic(actualBet);
    console.log(`This is the users actual. should show in screen below playing table ${actualBet}`);
  });

  const gameLogic = (x) => {
    num = Math.floor(Math.random() * 38);
    let random = redBlack[Math.floor(Math.random()* redBlack.length)];
    console.log(random)
    if (num % 2 === 0 && placedBet.toLowerCase() === "even") {
      winEvenOdd(x);
    } else if (num % 2 !== 0 && placedBet.toLowerCase() === "odd") {
      winEvenOdd(x);
    } else if (random === 'red' && el.id === 'red') {
      winEvenOdd(x);
    } else if (random === 'black' && el.id === 'black') {
      winEvenOdd(x);
    } else {
      loss(actualBet);
    }

  const winEvenOdd = (z) => {
    let userBank = document.getElementById('userBank').innerHTML;
    winnings = (z * 2);
    let money = parseInt(userBank) + winnings;
    userBankElement.innerHTML = money;
    document.getElementById('result').innerHTML = `You won! you chose ${placedBet} and the computer chose ${num}`;
    wins += 1;
    profit -= winnings;
  }

  const loss = (z) => {
    let userBank = document.getElementById('userBank').innerHTML;
    userBankElement.innerHTML = parseInt(userBank) + z;
    document.getElementById('result').innerHTML = `you lost! you chose ${placedBet} and the computer chose ${num}` ;
    losses += 1;
    profit += winnings;
  }

}
})
// const redBlack = (class) => {
//   console.log(class);
// }

// function numGen() {
//   let twelve = "";
//   let half="";

// //can turn this into its own function
// //decides if generated number is odd or even
//   if (num==="00") {
//     oddEven = "even"
//   }else if(num%2!==0){
//     oddEven = "odd"
//   }else if(num%2==0){
//     oddEven = "even"
//   }
// //can turn this into its own function
// //decides if generated number is in the 1st, 2nd, or 3rd twelve
//   if(num==="00"){
//     twelve="1st 12"
//   }else if(num<=12){
//     twelve="1st 12"
//   }else if(num<=24){
//     twelve="2nd 12"
//   }else if(num>24){
//     twelve="3rd 12"
//   }
// //can turn this into its own function
// //decides if generated number is 1-18 or 19-36
//   if(num>=1 && num<=18){
//     let half="1 to 18"
//   }else if(num>=19 && num<=36){
//     let half="19 to 36"
//   }
// }

// function result(){
//   let result = numGen()
//
//   if(result===placedBet){
//
//   }
// }

//
