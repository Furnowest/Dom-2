// Your code goes here
document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("click", () => {
        element.style.backgroundColor="pink"
        // if there r few its better to use for each to go around
    })
    
});
const body =document.querySelector("body")
body.addEventListener("dblclick", (event) =>{
   body.style.backgroundColor ="grey";

})

const mapPic =document.querySelector(".img-content")
mapPic.addEventListener("mouseenter", function(){
    mapPic.style.transform = "scale(2)";
    mapPic.style.transition = "transform 2s";
  })
  mapPic.addEventListener("mouseleave", function(){
    mapPic.style.transform = "scale(1)";
  })
//   const htwo =document.querySelectorAll("h2")

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(link =>{
    link.addEventListener("mouseover",(event)=> {
        event.target.style.backgroundColor= "yellow";
        event.stopPropagation();
    }) 

})
const logo =document.querySelector(".logo-heading")
logo.addEventListener("mouseout", (event) =>{
    event.target.style.fontSize = "100px";
    event.target.style.transition = "1s";

})
logo.addEventListener("copy",(event) =>{
    alert("coppy copy");
})
    



window.addEventListener("resize",(event) =>{
    alert("this should work now");
})

const htwo =document.querySelectorAll("h2")
document.querySelectorAll("h2").forEach(element =>{
    element.addEventListener("contextmenu", () =>{
        element.style.backgroundColor="pink";
        
    })
});

const footer =document.querySelector("p")
footer.addEventListener("scroll",(event) =>{
    event.target.style.fontSize = "50px";
    event.target.style.transition = "3s";
})




