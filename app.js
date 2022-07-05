const squares = document.querySelectorAll(".square");

const spider = document.querySelector(".spider");

const timeLeft = document.querySelector("#time-left");

const score = document.querySelector("#score");

const message = document.querySelector("#message")

let result = 0;
let hitPosition
let currentTime = 60
let timerId = null

//A FUNCTION TO PLACE THE SPIDER RANDOMLY ON ANY SQUARE BOX

function randomSquare(){
    squares.forEach(square => {

        square.classList.remove("spider")
    })
let randomPosition = squares[Math.floor(Math.random () * 9)]

randomPosition.classList.add("spider")

hitPosition= randomPosition.id
}

squares.forEach(square => {
square.addEventListener("mousedown", () =>{
   if(square.id == hitPosition ){
     result+=2
     score.innerHTML = result
     hitPosition=null

     message.innerHTML = "Kill more to get stars" 
   }
//DISPLAYING MESSAGE
   if(result==4){
     message.innerHTML ="🌟"
   }
   else if(result==8){
     message.innerHTML="You are on your way to two stars"
   }
   else if (result==10){
     message.innerHTML =" 🌟🌟"
   }
   else if(result==16){
    message.innerHTML =" 🌟🌟🌟"
   }
   else if(result==20){
    message.innerHTML =" 🌟🌟🌟🌟"
   }
   else if(result==30){
    message.innerHTML =" 🌟🌟🌟🌟🌟"
   }
   else if(result>30){
    message.innerHTML = "Grand Master 🤯🤯🤯🤯🤯 "
   }
})
});


function moveSpider(){
//SETTING TIME INTERVALS OF  THE SPIDER APPEARANCE
    timerId = setInterval(randomSquare, 800)
}

moveSpider()

function countDown(){
 currentTime--
 timeLeft.innerHTML= currentTime

 if (currentTime==0){
  //CLEARING THE TIMER
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert("GAME OVER! Your final score is " + result)

 }
}

//SETTING COUNTDWN TIMER INTERVAL
let countDownTimerId = setInterval(countDown, 1000)