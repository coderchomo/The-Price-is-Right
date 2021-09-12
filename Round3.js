let productPrice = 29300000;
let priceOfRound3 = [];

function listGuestPrice() {
    let priceOfPlayer1 = document.getElementById("price1").value;
    let priceOfPlayer2 = document.getElementById("price2").value;
    let priceOfPlayer3 = document.getElementById("price3").value;
    let priceOfPlayer4 = document.getElementById("price4").value;
    priceOfRound3[0] = comparePrice(priceOfPlayer1, productPrice);
    priceOfRound3[1] = comparePrice(priceOfPlayer2, productPrice);
    priceOfRound3[2] = comparePrice(priceOfPlayer3, productPrice);
    priceOfRound3[3] = comparePrice(priceOfPlayer4, productPrice);
}
function comparePrice(guessPrice, truePrice) {
    return truePrice - guessPrice;
}
function findTheWinnerPrice(price) {
    listGuestPrice();
    let index=0;
    let winnerPrice = price[0];
    for (let i = 0; i < price.length; i++) {
        if (winnerPrice > price[i] && price[i] > 0) {
            winnerPrice = price[i];
            index = i;
        }
    }return index;
}
function whoIsTheWinner() {
    let index= findTheWinnerPrice(priceOfRound3);
    document.getElementById("show").innerText = "The winner is player " + (index+1);
}
function getName(){
    let player1=document.getElementById("player1").value;
    let player2=document.getElementById("player2").value;
    let player3=document.getElementById("player3").value;
    let player4=document.getElementById("player4").value;
    if(player1!==""&&player1!==undefined){
        document.getElementById("name1").innerHTML="<p id='player1'>"+player1+"</p>";
    }
    if(player2!==""&&player2!==undefined){
        document.getElementById("name2").innerHTML="<p id='player2'>"+player2+"</p>";
    }
    if(player3!==""&&player3!==undefined){
        document.getElementById("name3").innerHTML="<p id='player3'>"+player3+"</p>";
    }
    if(player4!==""&&player4!==undefined){
        document.getElementById("name4").innerHTML="<p id='player4'>"+player4+"</p>";
    }
}