let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetbtn");
let newGamebtn= document.querySelector("#newgame");
let msgContainer= document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");



let turnO=true; //playerX and playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
let nowin=true;
boxes.forEach((box)=>{
    // box.addEventListener("")
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color="#321110";
            turnO=false;
            count+=1;
        }else{
            
            box.innerText = "X";
        //  box.setAttribute("color","pink");
        box.style.color="pink";
            

            turnO=true;
            count+=1;
        }
        box.disabled=true;

        checkWinner();
    });
});


const showWinner = (winner) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
     for(let box of boxes){
        box.disabled=true;
     }
}


const enableBoxes=()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern); 
        // console.log(
        //     pattern[0],pattern[1],pattern[2]
        // );
        // console.log(
        //     box[pattern[0].innerText],
        //     box[pattern[1].innerText],
        //     box[pattern[2].innerText]
        // );

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos2Val != ""){
                if(pos1Val === pos2Val && pos2Val ===pos3Val){
                    console.log("Winner",pos1Val);
                    nowin=false;
                    showWinner(pos1Val);
                }
        }
        if(nowin && count===9){
            msg.innerText=`No winner- play again`;
            msgContainer.classList.remove("hide");
        }
    }
}



//reset
const resetGame=()=>{
       turnO=true;
       enableBoxes();
       msgContainer.classList.add("hide");
       nowin=true;
       count=0;
       
}


newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);