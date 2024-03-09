class Game{
    count=0;
    currentPlayer="x";
    
    gameDisplay=[
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
    ];
    gameBoard=[
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
    ];
    
    displayBoard(){
        for(let i=0; i< this.gameBoard.length;i++){
            // console.log(display[i])
            console.log(`| ${this.gameBoard[i][0]} | ${this.gameBoard[i][1]} | ${this.gameBoard[i][2]} |`);
        
            // for(let j=0; j<display[i].length;j++){
            //     console.log(display[i][j]);
            // }
        
        }
    }
    
    gameWin(){
        if (this.gameBoard[0][0] === this.gameBoard[0][1] && this.gameBoard[0][0] === this.gameBoard[0][2]) {
            return true;
            
        } else if(this.gameBoard[1][0] === this.gameBoard[1][1] && this.gameBoard[1][0] === this.gameBoard[1][2]) {
            return true
        } else if(this.gameBoard[2][0] === this.gameBoard[2][1] && this.gameBoard[2][0] === this.gameBoard[2][2]){
            return true;
        } else if(this.gameBoard[0][0] === this.gameBoard[1][0] && this.gameBoard[0][0] === this.gameBoard[2][0]){
            return true;
        } else if(this.gameBoard[0][1] === this.gameBoard[1][1] && this.gameBoard[0][1] === this.gameBoard[2][1]){
            return true;
        } else if(this.gameBoard[0][2] === this.gameBoard[1][2] && this.gameBoard[0][2] === this.gameBoard[2][2]){
            return true;
        } else if(this.gameBoard[0][0] === this.gameBoard[1][1] && this.gameBoard[0][0] === this.gameBoard[2][2]){
            return true;
        } else if(this.gameBoard[0][2] === this.gameBoard[1][1] && this.gameBoard[0][2] === this.gameBoard[2][0]){
            return true;
        }
        return false;
    }

    gamePlay(click_id){
        let temp=click_id.split("-");

        document.getElementById(click_id).removeAttribute("onclick");
        // document.getElementById(click_id).innerHTML="";
        document.getElementById(click_id).appendChild(this.setImage());
        document.getElementById("usrSelect").innerHTML="Playing...";
        console.log(this.currentPlayer);
        this.gameBoard[+temp[1]][+temp[2]]= this.currentPlayer; // set the the current players play in the array of the gameboard
        // this.gameBoard[+temp[1]][+temp[2]]
        this.count++;
        if (this.count > 4 && this.gameWin()){
            this.gameStop();
            console.log('Won');
            this.modalMsg(this.currentPlayer);
            document.querySelector("dialog").showModal(); // display modal message
            this.displayBoard();
            document.getElementById("usrSelect").innerHTML=`${this.currentPlayer} wins`;

           
        }
        else if(this.count===9 && !this.gameWin()){
            this.modalMsgTie();
            document.querySelector("dialog").showModal(); // display modal message
            console.log("Tie");
        }

        
        if (this.currentPlayer=== "x"){
            this.currentPlayer='o';
        }
        else{
            this.currentPlayer='x';
        }
        // return temp;
        // document.getElementById(click_id).classList.toggle("selected");
    }
    
    gameStop(){
        for( let i=0; i< this.gameBoard.length; i++){
            for(let j=0; j<this.gameBoard[i].length; j++)
                document.getElementById(`cell-${i}-${j}`).removeAttribute("onclick");

        }
    }

    setImage(){
        let img = new Image();
        if(this.currentPlayer=== "x"){
            img.src="./x.svg";
            
        }
        else{
            img.src="./circle.svg";
        }
        return img;
    }

    //create an html template to display modal messages for thr current player who won
    modalMsg(player){

        let template=`
        <div class="modal-show">
                <p>Player ${player} WON HAPPY???</p>
                <button id="reset" onclick="reload()">Restart </button>
            </div>
        `

        let temp=document.createElement("template");
        temp.innerHTML=template.trim();
        let msg=document.createElement("div");
        msg.appendChild(temp.content.firstElementChild);
        document.querySelector("dialog").appendChild(msg);
    }

    modalMsgTie(player){

        let template=`
        <div class="modal-show">
                <p>DRAW!!! NO ONE WON</p>
                <button id="reset" onclick="reload()">Restart </button>
            </div>
        `

        let temp=document.createElement("template");
        temp.innerHTML=template.trim();
        let msg=document.createElement("div");
        msg.appendChild(temp.content.firstElementChild);
        document.querySelector("dialog").appendChild(msg);
    }

    // reload(){
    //     return location.reload();
    // }

}

function reload(){
    return location.reload();
  }

tic= new Game();

// resetBtn=document.getElementById("reset");
// resetBtn.addEventListener("click", ()=>{
//     location.reload();
//   })


