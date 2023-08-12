let btns = document.querySelectorAll(".selectionBar button");
let content = document.querySelector(".galleryContent");
let holder = document.querySelectorAll(".imageHolder");
var check = 0;
window.addEventListener("DOMContentLoaded",function(){
    holder.forEach(function(hldr){
        hldr.classList.add("imageHolder-active");
    })
})
content.addEventListener("click", function(e){
    let id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active-btn");
            e.target.classList.add("active-btn");
        })

        if(id === "all"){
            holder.forEach(function(hldr){
                hldr.classList.add("imageHolder-active");
            })
        }

        else if(id != "all"){
            holder.forEach(function(hldr){
                hldr.classList.remove("imageHolder-active");
            })
            let element = document.getElementById(id);
        element.classList.add("imageHolder-active");
        }
    }
})

    gsap.to(".galleryChangeH1", {
        duration: 2,
        text: {
            value: "GALLERY OF",
            delimiter: ""
        },
        ease: "none",
        repeat:-1,
        yoyo:true,
        scrub:true
    });









//GSAP
gsap.to(".para-pic-gallery-head video", {
    scrollTrigger: {
        trigger: ".para-pic-gallery-head video",
        start: "top center",
        scrub: true
    },
    y:"2vw",
})
gsap.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: "10% 10%",
        end:"20% 20%",
        scrub: true,
    },
    backgroundColor: "#fff"
})
gsap.to(".para-pic-gallery-head p", {
    scrollTrigger: {
        trigger: ".main",
        start: "10% 10%",
        end:"20% 20%",
        scrub: true,
    },
    color:"#000"
})

gsap.from(".gallery-head h1",{
    y:-100,
    opacity:0,
    stagger:0.5
})

function changeToHomePage(){
    window.location.replace("../index.html");
}