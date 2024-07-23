let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let player1=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player1){
            console.log("clicked");
            box.innerText="O";

            player1=false;
        }else{
            box.innerText="X";

            player1=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const anabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
msgcontainer.classList.remove("hide");
    disabledboxes();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
};
const resetgame=()=>{
    player1=true;
    anabledboxes();
    msgcontainer.classList.add("hide");
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);