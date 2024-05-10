let boxes = document.querySelectorAll('.btn');
let resetbtn = document.querySelector('#reset');

let newgamebtn = document.querySelector('#newgame');
let msg = document.querySelector('#msg')

let turno = true;

const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turno === true){
            box.innerText = "o"
            box.style.color = 'black'
            turno = false;
        }
        else{
            box.innerText = "×"
            box.style.color = 'black'
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const resetgame = () =>{
    turno = true;
    enabledboxes();
    msg.classList.add("hide")
}

const disabledboxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledboxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    msg.classList.remove("hide")
    disabledboxes();
}

const checkwinner = () =>{
    for(pattern of winpatterns){
        let pos1val  = boxes[pattern[0]].innerText;
        let pos2val  = boxes[pattern[1]].innerText;
        let pos3val  = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val)
            }
        }
    }
}

resetbtn.addEventListener('click',resetgame);
newgamebtn.addEventListener('click',resetgame);