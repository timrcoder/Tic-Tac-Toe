function startGame(){
    document.turn="x";
    setMessage(document.turn + " gets to start.");
}

function setMessage(msg){
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if(square.innerText === "") {  
        square.innerText = document.turn;
        if(document.turn === "x"){
            document.turn = "o";
        } else {
            document.turn = "x";
        }
        console.log(document.turn);
        setMessage("It's " + document.turn + " 's turn!");
    } else {
       setMessage("That square is already used!");
    console.log("failure");
   }
}



