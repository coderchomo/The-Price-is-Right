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
    document.getElementById("51").innerText = "Cặp da có giá là " + productPrice51;
    document.getElementById("52").innerText = "Bánh trung thu Vọng Nguyệt có giá là " + productPrice52;
    document.getElementById("53").innerText = "Chú chó của chúng ta có giá là " + productPrice53;
    document.getElementById("54").innerText = "SH 2021 có giá là " + productPrice54;
    document.getElementById("55").innerText = "Loa Marshall Woburn2 có giá là " + productPrice55;
    document.getElementById("total").innerText = "Tổng giá trị sản phẩm là " + totalPriceRound5;
}