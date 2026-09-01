//accessing assets
let game_container = document.querySelector(".game-container")
let score = document.querySelector(".score")
let pipe = document.querySelector(".obstacle")
let mario = document.querySelector(".mario")

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
    let movement = 10;
    let position;

    if(direction === "right"){
        position =  marioPosition + movement ;
        mario.classList.remove(".flipped")
    }
    else if(direction === "left"){
        position =  marioPosition - movement ;
        mario.classList.add("flipped")
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
                isMovingLeft = true;
                break;

        case "ArrowRight":
            case "d":
                case "D":
                    isMovingRight = true;
                    break;
    }
})

window.addEventListener("keyup", (e)=>{
    switch(e.key){
        case "ArrowLeft " : 
            case "a" :
                case "A" :
                isMovingLeft = false;
                break;

        case "ArrowRight":
            case "d":
                case "D":
                    isMovingRight = false;
                    break;
    }
})


setInterval(()=>{
    if(isMovingLeft){
        moveMario("left")
        // isMovingLeft = false;
    }
    else if(isMovingRight){
        moveMario("right")
        // isMovingRight = false;
    }
}, 20)