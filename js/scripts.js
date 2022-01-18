
const values=["ace ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10 ", "jack ", "queen ", "king "];
const suits=["of clubs", "of diamonds", "of hearts", "of spades"];
const cards=[];
  suits.forEach(function(suit) {
    values.forEach(function(value){
      cards.push(value + suit);
    });
});


$(document).ready(function(){
$(".card1").text(cards[0]);
$(".card2").text(cards[1]);
$(".card3").text(cards[2]);
$(".card4").text(cards[3]);
$(".card5").text(cards[4]);
$(".card6").text(cards[5]);
$(".card7").text(cards[6]);
$(".card8").text(cards[7]);
$(".card9").text(cards[8]);
$(".card10").text(cards[9]);
$(".card11").text(cards[10]);
$(".card12").text(cards[11]);
$(".card13").text(cards[12]);
$(".card14").text(cards[13]);
$(".card15").text(cards[14]);
$(".card16").text(cards[15]);
$(".card17").text(cards[16]);
$(".card18").text(cards[17]);
$(".card19").text(cards[18]);
$(".card20").text(cards[19]);
$(".card21").text(cards[20]);
$(".card22").text(cards[21]);
$(".card23").text(cards[22]);
$(".card24").text(cards[23]);
$(".card25").text(cards[24]);
$(".card26").text(cards[25]);
$(".card27").text(cards[26]);
$(".card28").text(cards[27]);
$(".card29").text(cards[28]);
$(".card30").text(cards[29]);
$(".card31").text(cards[30]);
$(".card32").text(cards[31]);
$(".card33").text(cards[32]);
$(".card34").text(cards[33]);
$(".card35").text(cards[34]);
$(".card36").text(cards[35]);
$(".card37").text(cards[36]);
$(".card38").text(cards[37]);
$(".card39").text(cards[38]);
$(".card40").text(cards[39]);
$(".card41").text(cards[40]);
$(".card42").text(cards[41]);
$(".card43").text(cards[42]);
$(".card44").text(cards[43]);
$(".card45").text(cards[44]);
$(".card46").text(cards[45]);
$(".card47").text(cards[46]);
$(".card48").text(cards[47]);
$(".card49").text(cards[48]);
$(".card50").text(cards[49]);
$(".card51").text(cards[50]);
$(".card52").text(cards[51]);

$(".deck").fadeIn();


});