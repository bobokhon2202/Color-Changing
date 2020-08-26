const btn = document.querySelectorAll(".btn");
const box = document.querySelector(".box");
for(let i=0; i<btn.length; i++){
btn[i].addEventListener("click", function(){
    box.style.background=this.getAttribute("data-color");
})
    
}
    