let productRound1Price = 235000;
let priceOfRound1 = [];
function listGuestPrice() {
    let priceOfPlayer1 = document.getElementById("price1").value;
    let priceOfPlayer2 = document.getElementById("price2").value;
    let priceOfPlayer3 = document.getElementById("price3").value;
    let priceOfPlayer4 = document.getElementById("price4").value;
    priceOfRound1[0] = comparePrice(priceOfPlayer1, productRound1Price);
    priceOfRound1[1] = comparePrice(priceOfPlayer2, productRound1Price);
    priceOfRound1[2] = comparePrice(priceOfPlayer3, productRound1Price);
    priceOfRound1[3] = comparePrice(priceOfPlayer4, productRound1Price);
}

function comparePrice(guessPrice, truePrice) {
    return truePrice - guessPrice;
}

function findTheWinnerPrice(price) {
    listGuestPrice();
    let winnerPrice = price[0];
    let index=0;
    for (let i = 0; i < price.length; i++) {
        if (winnerPrice > price[i] && price[i] > 0) {
            winnerPrice = price[i];
            index = i;
        }
    }
    return index;
}

function whoIsTheWinner() {
    let index = findTheWinnerPrice(priceOfRound1);
    document.getElementById("show").innerText = "The winner is player " + (index + 1);
}