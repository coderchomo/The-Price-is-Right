let productPrice51 = 3200000;
let productPrice52 = 1350000;
let productPrice53 = 6000000;
let productPrice54 = 116380000;
let productPrice55 = 11350000;
let totalPriceRound5 = productPrice51+productPrice52+productPrice53+productPrice54+productPrice55;
let priceOfRound5 = [];

function listGuestPrice() {
    let priceOfPlayer1 = document.getElementById("price1").value;
    let priceOfPlayer2 = document.getElementById("price2").value;
    let priceOfPlayer3 = document.getElementById("price3").value;
    let priceOfPlayer4 = document.getElementById("price4").value;
    priceOfRound5[0] = comparePrice(priceOfPlayer1, totalPriceRound5);
    priceOfRound5[1] = comparePrice(priceOfPlayer2, totalPriceRound5);
    priceOfRound5[2] = comparePrice(priceOfPlayer3, totalPriceRound5);
    priceOfRound5[3] = comparePrice(priceOfPlayer4, totalPriceRound5);
}

function comparePrice(guessPrice, truePrice) {
    return truePrice - guessPrice;
}

function findTheWinnerPrice(price) {
    listGuestPrice();
    let winnerPrice = price[0];
    let index;
    for (let i = 0; i < price.length; i++) {
        if (winnerPrice > price[i] && price[i] > 0) {
            winnerPrice = price[i];
            index = i;
        }
    }
    return index;
}

function whoIsTheWinner() {
    let index = findTheWinnerPrice(priceOfRound5);
    document.getElementById("show").innerText = "The winner is player " + (index + 1);
    document.getElementById("51").innerHTML = "Cặp da công sở cao cấp "+"<br>" + productPrice51;
    document.getElementById("52").innerHTML = "Hộp bánh trung thu cao cấp Vọng Nguyệt " +"<br>" + productPrice52;
    document.getElementById("53").innerHTML = "1 Chiếc chó fox sóc sang sịn mịn " +"<br>" + productPrice53;
    document.getElementById("54").innerHTML = "SH 2021 siêu chanh sả " +"<br>" + productPrice54;
    document.getElementById("55").innerHTML = "Loa Marshall Woburn2 " +"<br>" + productPrice55;
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