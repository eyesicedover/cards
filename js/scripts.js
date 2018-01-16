$(document).ready(function(){
  var suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
  var cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
  suits.forEach(function(suit) {
    cards.forEach(function(card) {
       $("ul#deck").append("<li>" + card + " of " + suit +"</li>");
    });
  });
});
