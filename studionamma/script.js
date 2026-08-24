let menu_item = document.querySelector("#menu-item")
let talk_item = document.querySelector("#talk-item")
let hero_video_container = document.querySelector(".cursor-follower-video-container")
let hero_container =  document.querySelector(".hero-container")
let dark_item = document.querySelector("#dark-mode-item")
let menubar_overlay_container = document.querySelector(".menubar-overlay-container")

let isDark = false;


menu_item.addEventListener("mouseenter",() => {
    let isMenubarOpen = menubar_overlay_container.classList.contains("show")
    menu_item.textContent = isMenubarOpen ? "CLOSE" : "OPEN"
})

menu_item.addEventListener("mouseleave",() => {
    let isMenubarOpen = menubar_overlay_container.classList.contains("show")
    menu_item.textContent = isMenubarOpen ? "MENU" : "CLOSE"
})

menu_item.addEventListener("click", () => {
    menubar_overlay_container.classList.toggle("show")
    let isMenubarOpen = menubar_overlay_container.classList.contains("show")
    menu_item.textContent = isMenubarOpen ? "CLOSE" : "OPEN"

    if(!isMenubarOpen){
        menubar_overlay_container.style.transform = "translateY(-100%)"
    }
})


talk_item.addEventListener("mouseenter",() => {
    talk_item.textContent = "CONTACT US"
})

talk_item.addEventListener("mouseleave",() => {
    talk_item.textContent = "LET'S TALK"
})


document.addEventListener("mousemove", (e) => {
    // cursor follower logic
    hero_video_container.style.top= `${e.clientY}px`
    hero_video_container.style.left=`${e.clientX}px`
    hero_video_container.style.display = "block"
})

hero_container.addEventListener("mouseenter", (e) => {
    hero_video_container.style.opacity="1" 
})

hero_container.addEventListener("mouseleave", (e) => {
    // cursor follower logic
    hero_video_container.style.opacity="0" 
})


//DARK MODE LOGIC
dark_item.addEventListener("click", () => {
    isDark = !isDark;
    document.body.classList.add("dark")
    
    if(isDark){
        dark_item.innerHTML = "LIGHT MODE"
    }else{
        document.body.classList.remove("dark")
        dark_item.innerHTML = "DARK MODE"
    }

})

