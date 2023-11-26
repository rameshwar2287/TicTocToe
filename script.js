let turn = "X";
let audioturn = new Audio("ting.mp3");
let gamewin = new Audio("gameover.mp3");
let gameover = false;
let p1;
let p2;
const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

// check win function
const checkwin = () => {
  let boxtexts = document.getElementsByClassName("gamebox");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML &&
      boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML &&
      boxtexts[e[0]].innerHTML !== ""
    ) {
      if (turn === "0") {
      gameover = true;

        document.querySelector("#namechange").innerHTML = p1 + " WON ";
        
      } if(turn==="X"){
      gameover = true;
        
        document.querySelector("#namechange").innerHTML = p2 + " WON ";
      }
      
      gamewin.play();
      document.getElementsByClassName("danceimg")[0].style.width = "156px";

    }
    let c=0;
    Array.from(boxtexts).forEach(e=>{
        if(e.innerHTML !== ""){
             c=c+1;
        }
    })
    if(c===9 && gameover!==true){
        document.querySelector("#namechange").innerHTML = "Draw";
        gameover=true;
    }
  });
  if(gameover===true){
    clear();
  }
};

// click function

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".gamebox");
  element.addEventListener("click", () => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      turn = changeturn();
      audioturn.play();
      checkwin();

      if (!gameover) {
        if (turn === "X") {
          document.getElementById("namechange").innerHTML = "Turn For " + p1;
        } else {
          document.getElementById("namechange").innerHTML = "Turn For " + p2;
        }
      }
    }
  });
});


// reset button
let reset = document.querySelector(".btn");
reset.addEventListener("click", reset=() => {
  let boxtext = document.querySelectorAll(".gamebox");
  Array.from(boxtext).forEach((e) => {
    e.innerHTML = "";
  });
  turn = "X";
  gameover = false;
  document.getElementById("namechange").innerHTML = "Turn For " + p1;
  document.getElementsByClassName("danceimg")[0].style.width = "0px";
});


// submit button

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  p1 = document.getElementById("player1").value;
  console.log(p1);
  p2 = document.getElementById("player2").value;
  console.log(p2);
  if(p1 !=="" && p2!==0 && p1!==p2){
      document.getElementById("namechange").innerHTML="Turn For "+p1;
      document.querySelector(".playerinfo").style.display = "none";
  }
  else{
    alert("Please Enter Player Name Correctly");
  }
});

//new game button js
let newgame=document.getElementsByClassName("newgame")[0];
newgame.addEventListener('click' ,()=>{
    document.querySelector(".playerinfo").style.display = "flex";
    let boxtext = document.querySelectorAll(".gamebox");
    Array.from(boxtext).forEach((e) => {
      e.innerHTML = "";
    });
    turn = "X";
    gameover = false;
    document.getElementById("namechange").innerHTML = "";
    document.getElementsByClassName("danceimg")[0].style.width = "0px";
    p1="";
    p2="";
})

// clear function
const clear=()=>{
    let boxtext = document.querySelectorAll(".gamebox");
  Array.from(boxtext).forEach((e) => {
    e.innerHTML = "";
  });
  
}
// const element=document.getElementsByClassName("box")[0];
// element.addEventListener('click' ,myfun);
// function myfun(){
//     document.getElementById("box1").innerHTML="X";
// }
// element.addEventListener('click' ,myfun1);
