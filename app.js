const Body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn button");
const infoText = document.querySelector(".info");

toggleBtn.addEventListener("click", ()=>{
    Body.classList.toggle("dark-mode")
    if(Body.classList.contains("dark-mode")){
        document.querySelector("nav header h1").classList.add("dark-mode")
        toggleBtn.textContent = "LIGHT MODE"
        toggleBtn.classList.add("light-mode")
        infoText.style.color = "#00baba"
    }
    else{
        document.querySelector("nav header h1").classList.remove("dark-mode")
        toggleBtn.textContent = "DARK MODE"
        toggleBtn.classList.remove("light-mode")
        infoText.style.color = "#0000FF"
    }
})