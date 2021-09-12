let board=[];
let data="";
for (let i = 0; i < 3; i++) {
    board[i]=['..', '..' ,'..']
}
for (let i = 0; i < 3; i++) {
    data+="<br>";
    for (let j = 0; j < 3; j++) {
        data+=board[i][j]+"&ensp;&ensp;"
    }
}
data += "<br/><br/><input type='button' value='pushX' onclick='changeX()'>"
document.getElementById("caro").innerHTML=data;
function changeX() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 3; i++) {
        data += "<br/>";
        for (let j = 0; j < 3; j++) {
            data += board[i][j] + "&ensp;&ensp;";
        }
    }
    data += "<br/><br/><input type='button' value='pushX' onclick='changeX()'>"
    document.getElementById("caro").innerHTML=data;
}
function checkWin() {
    data="";
    showX();
    for (let i = 0; i < 3; i++) {
        data += "<br/>";
        for (let j = 0; j < 3; j++) {
            data += board[i][j] + "&ensp;&ensp;";
        }
    }
    if(board[0][0]=="X"&&board[0][1]=="X"&&board[0][2]=="X")alert("You win");
    if(board[1][0]=="X"&&board[1][1]=="X"&&board[1][2]=="X")alert("You win");
    if(board[2][0]=="X"&&board[2][1]=="X"&&board[2][2]=="X")alert("You win");
    if(board[0][0]=="X"&&board[1][1]=="X"&&board[2][2]=="X")alert("You win");
    if(board[0][2]=="X"&&board[1][1]=="X"&&board[2][0]=="X")alert("You win");
    else{
        alert("You lose");
    }
    data += "<br/><br/><input type='button' value='pushX' onclick='changeX()'>"
    document.getElementById("caro").innerHTML=data;
}
function showX(){
    let x=Math.floor(Math.random()*2);
    board[x][1]="X";
}

