let boxes= document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");

let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        //alert("box is clicked")
        if (turn0) { //player is O
            box.innerText ="0";
            turn0=false;
        }
        else{//If player iX
            box.innerText ="X";
            turn0=true;
        }
    box.disabled=true;
    checkwinner();
    });
});

const checkwinner = () =>{
    for(let pattern of winpatterns){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3)
        {
            //alert("Winner",pos1);
            showWinner(pos1);
        }
        }
        }
    }
    const showWinner = (winner) => {
        msg.innerText=`Congrats,Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    }

    const resetgame = () => {
        turn0 = true;
        enableboxes();
        msgcontainer.classList.add("hide");
    };
    const disableboxes = () => {
        for(let box of boxes) {
            box.disabled = true;
        }
    };
    const enableboxes = () => {
        for(let box of boxes) {
            box.disabled = false;
            box.innerText= "";
        }
    }
    newgamebtn.addEventListener("click", resetgame);
    reset.addEventListener("click", resetgame);

