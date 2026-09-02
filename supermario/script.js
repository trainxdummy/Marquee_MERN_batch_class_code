//accessing assets
let game_container = document.querySelector(".game-container")
let score = document.querySelector(".score")
let pipe = document.querySelector(".obstacle")
let mario = document.querySelector(".mario")

let gameContainerWidth = game_container.offsetWidth;

/** Basic functions : 
     * Jump/fall

     * move left
     * move right
     * move obstacle
     * collision
*/

let isJumping = false;
let isMovingLeft = false;
let isMovingRight = false;

//TODO 1 : JUMP
let marioPosition = 0;

//jump
function jump(){
    if(isJumping) return;

    isJumping = true;

    let startPosition = 0;
    let endPosition = 200;
    let velocity = 8;

    let jumpInterval = setInterval(() =>{
        if(startPosition <= endPosition){
            startPosition += velocity;
            mario.style.bottom =  startPosition + "px";
        }
        else{
            clearInterval(jumpInterval);
            fall()

            isJumping = false;
        }  
    },10)
}


//fall
function fall(){
    let startPosition = 200;
    let endPosition = 0;
    let velocity = 8;

    let fallInterval = setInterval(() => {
           if(startPosition >  endPosition){
               startPosition -= velocity;
               mario.style.bottom =  startPosition + "px";
        }
        else{
            clearInterval(fallInterval);
        }  
    }, 10);
}

//moveMario
function moveMario(direction){
    let movement = 20;
    let position;

    if(direction === "right"){
        position =  marioPosition + movement ;
        mario.classList.remove("flipped");
    }
    else{
        position =  marioPosition - movement ;
        mario.classList.add("flipped");
    }

    var maxPosition = gameContainerWidth - mario.offsetWidth;

    if(position >= 0 && position <= maxPosition){
        marioPosition = position;
        mario.style.left = marioPosition + "px";
    }
}

//window events
window.addEventListener("keydown", (e)=>{
    switch(e.key){
        case " ":
            jump();
            break;

        case "ArrowLeft" : 
            case "a" :
                case "A" :
                moveMario("left")
                break;

        case "ArrowRight":
            case "d":
                case "D":
                    moveMario("right")
                    break;
    }
})

