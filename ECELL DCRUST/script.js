//NAVBAR
let menuBar = document.querySelector(".menu-bar i");
let navBar = document.querySelector(".navbar-nav");
menuBar.addEventListener("click", function(){
    navBar.classList.toggle("navbar-nav-active");
})

//PAGE 1
let currIndex = 0;
function h1ChangeText(){
    let itemsH1 = ["IDEATE", "INNOVATE", "ACCELERATE", "SCALE", "INTEGRATE"];
    currIndex++;
    if(currIndex > 4){
        currIndex = 0;
    }
    document.querySelector("#changeH1").textContent = itemsH1[currIndex];
    setTimeout(h1ChangeText, 800);
}

h1ChangeText();


//GSAP
gsap.from(".page-1 h1",{
    y:-100,
    stagger:0.5,
    opacity:0
})

gsap.to(".vid-para video", {
    scrollTrigger: {
        trigger: ".vid-para video",
        start: "top center",
        scrub: true
    },
    y:"10vh",
})

gsap.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: "20% 20%",
        end:"45% 45%",
        scrub: true,
    },
    backgroundColor: "#fff"
})

gsap.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: "55% 55%",
        end:"65% 65%",
        scrub: true,
    },
    backgroundColor: "#000"
})

gsap.to(".pic-para-img img", {
    scrollTrigger: {
        trigger: ".pic-para-img img",
        start: "top 90%",
        scrub: true
    },
    scale:1.5
})

function blogClick(){
    alert("BLOGS COMING SOON");
}







