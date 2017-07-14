var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function flipCard(cardId) {

  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cardId);
  if (cardsInPlay.length === 2){
    if (cardId === cardId) {
      alert("You found a match")
    }
    else {
      alert("Try again")
    }
  };
  console.log('user flipped ' + cardsInPlay);


}
