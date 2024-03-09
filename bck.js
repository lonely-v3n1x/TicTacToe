let bo=[
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
];

let display=[
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
];
let gameBoard=[
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
];




function displayBoard(arr) {
    for(let i=0; i< arr.length;i++){
        // console.log(display[i])
        console.log(`| ${arr[i][0]} | ${arr[i][1]} | ${arr[i][2]} |`);
    
        // for(let j=0; j<display[i].length;j++){
        //     console.log(display[i][j]);
        // }
    
    }
    
}



function getBoardNum(click_id){
    let temp=click_id.split("-");
    document.getElementById(click_id).removeAttribute("onclick");
    console.log(gameBoard[+temp[1]][+temp[2]]);
    return temp;
    // document.getElementById(click_id).classList.toggle("selected");
}



// winning combo
// 123 ***
// 456***
// 789***
// 147***
// 258***
// 369***
// 159***
// 357


function gameWin(board){
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
        return true;
        
    } else if(board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
        return true
    } else if(board[2][0] === board[2][1] && board[2][0] === board[2][2]){
        return true;
    } else if(board[0][0] === board[1][0] && board[0][0] === board[2][0]){
        return true;
    } else if(board[0][1] === board[1][1] && board[0][1] === board[2][1]){
        return true;
    } else if(board[0][2] === board[1][2] && board[0][2] === board[2][2]){
        return true;
    } else if(board[0][0] === board[1][1] && board[0][0] === board[2][2]){
        return true;
    } else if(board[0][2] === board[1][1] && board[0][2] === board[2][0]){
        return true;
    }
    return false
}


function gameMove(set){
    let count=0;
    while(count!== 9){
        
    }
    // let [row, col]=getBoardNum(set);
    // gameBoard[row][col]=;
}


// for(let i=0; i < bo.length;i++){
//     for(let j=0; j< bo.length;j++){
//         // console.log(usr)
//         bo[i][j]=prompt();
//         if(gameWin(bo)=== true){
//             displayBoard(bo);
//             console.log("won")
//         }
//         else{
//             displayBoard(bo);
//             console.log("not");
//         }
//     // dis(board);
    
        
//     }
// }