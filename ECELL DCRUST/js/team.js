let teamCard = document.querySelectorAll(".teamCard");
let nameText = document.querySelectorAll(".teamCard h1");

let teamName = ["AMAN SHARMA", "TUSHAR BHUTANI", "HARSH SINGHAL", "VIPIN BENIWAL", "TUSHAR MEHTA", "PANKAJ ARARIYA","RIBHAV SHARMA", "AZAAN AHMAD", "DEEPANSHU SOLANKI", "MANDEEP", "SNEHA", "AASHISH JOSHI", "JANHVI SEHGAL", "SIRAJUDDIN", "ANUBHAV RAWAT", "SAKSHI YADAV", "CHESTA PAHAL", "RAHUL SHEKHAWAT", "KRITIKA CHAUHAN", "ADITYA RAO" ];
let positionTeam = ["FOUNDER", "CO-FOUNDER", "VICE PRESIDENT", "PRESIDENT", "GENERAL SECRETARY", "VICE PRESIDENT", "VICE PRESIDENT", "TECH HEAD (WEB)", "TECH HEAD", "CORPORATE HEAD", "MARKETING HEAD", "DESIGN HEAD", "R&D HEAD", "PUBLIC RELATIONS HEAD","SOCIAL MEDIA HEAD","ANCHORING HEAD", "ANCHORING HEAD","EVENT HEAD", "EVENT HEAD", "CONTENT HEAD" ];
for(let i = 0; i < positionTeam.length; i++){
    teamCard[i].addEventListener("mouseenter",function (teamCardElement){
        nameText[i].textContent = positionTeam[i];
    });
    teamCard[i].addEventListener("mouseleave",function (teamCardElement){
        nameText[i].textContent = teamName[i];
    });
}

gsap.to(".main",{
    scrollTrigger:{
        trigger:".main",
        start:"5% 5%",
        end:"25% 25%",
        scrub: true
    },
    backgroundColor: "rgb(38, 38, 38)"
})

gsap.from(".meetTeam h1", {
    y:-200,
    opacity:0,
    stagger:0.5
})

function changeToHomePage(){
    window.location.replace("../index.html");
}




//

let teamSB = document.querySelector(".teamSortbar");
let yBtn = document.querySelectorAll(".yearBtn");
let primTeam = document.querySelectorAll(".primaryTeam");

teamSB.addEventListener("click",function(btn){
    let id = btn.target.dataset.active;
    if(id){
        yBtn.forEach(function(y){
            y.classList.remove("yBtn-active");
            btn.target.classList.add("yBtn-active")
        })

        primTeam.forEach(function(y){
            y.classList.remove("primaryTeam-active")
        })
        let primTeamid = document.getElementById(id);
        primTeamid.classList.add("primaryTeam-active");
    }
})


















