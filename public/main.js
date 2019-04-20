document.addEventListener("DOMContentLoaded", () => {

//Had to set some global variables to get things to run
   let betChoice; //used in forEach loop run on board pieces and in gameLogic function to compare result to bet
   let betAmount; //Used to select how much the user's betting. Used in input button
   let reward;
   let el;
   const userBankElement = document.getElementById('userBank');


   Array.from(document.querySelectorAll(".board")).forEach((element) => {
      element.addEventListener('click', () => {
         betChoice = element.innerText;
         el = element;
         document.querySelector('.chosenBet').innerText = betChoice;
         console.log(`This is the players bet.. should show in screen below playing table ${betChoice}`);
      });
   });

   document.querySelector('#betClick').addEventListener('click', () => {
      const betInput = document.querySelector('#betInput').value;
      betAmount = parseFloat(betInput);
      console.log(`This is the users actual. should show in screen below playing table ${betAmount}`);
      gameLogic(betAmount);
   });

   const gameLogic = (x) => {
      num = Math.floor(Math.random() * 38);
      const redBlack =  ["black", "red"];
      let random = redBlack[Math.floor(Math.random()* redBlack.length)];
      if (betChoice === undefined) {
         alert("please make a bet")
      } else {
         if (num % 2 === 0 && betChoice.toLowerCase() === "even") {
            winEvenOddOrBlackRed (x);
            document.getElementById('result').innerHTML = `You won! you chose ${betChoice} and the computer chose ${num}`;
         } else if (num % 2 !== 0 && betChoice.toLowerCase() === "odd") {
            winEvenOddOrBlackRed (x);
            document.getElementById('result').innerHTML = `You won! you chose ${betChoice} and the computer chose ${num}`;
         } else if (betChoice.toLowerCase()  === "red" && random === "red") {
            winEvenOddOrBlackRed (x);
            document.getElementById('result').innerHTML = `You won! you chose ${betChoice} and the computer chose ${random}`;
         } else if (betChoice.toLowerCase()  === "black" && random === "black") {
            winEvenOddOrBlackRed (x);
            document.getElementById('result').innerHTML = `You won! you chose ${betChoice} and the computer chose ${random}`;
         } else if (betChoice === "1 to 18" && num > 1 && betChoice === "1 to 18" && num < 18) {
            winOneEighteen_EighteenThirtySix(x);
            document.getElementById('result').innerHTML = `You won! you chose ${betChoice} and the computer chose ${num}`;
         } else if (betChoice === "19 to 36" && num > 19 && betChoice === "19 to 36" && num < 36) {
            winOneEighteen_EighteenThirtySix(x);
            document.getElementById('result').innerHTML = `You won! you chose ${betChoice} and the computer chose ${num}`;
         } else {
            loss(betAmount);
         }
      }
   }

   const winEvenOddOrBlackRed = (z) => {
      let userBank = document.getElementById('userBank').innerHTML;
      reward = (z * 2);
      let money = parseInt(userBank) + reward;
      userBankElement.innerHTML = money;
   }

   const winOneEighteen_EighteenThirtySix = (z) => {
      let userBank = document.getElementById('userBank').innerHTML;
      reward = (z * 3); // making 3x what u put fown
      let money = parseInt(userBank) + reward;
      userBankElement.innerHTML = money;
   }

   const loss = (z) => {
      let userBank = document.getElementById('userBank').innerHTML;
      userBankElement.innerHTML = parseInt(userBank) - (z);
      document.getElementById('result').innerHTML = `you lost!` ;
   }

});
