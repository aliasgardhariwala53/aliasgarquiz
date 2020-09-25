window.onload=function () {
        show(0);
}

let questionlist =[
    {
        id: 1,
        question:"Q1.Satellite launching station is located at",
        asnwer:"Sriharikotta (Andhra Pradesh)",
        Option:[
            "Sriharikotta (Andhra Pradesh)",
            "Solapur (Maharashtra)",
            "Salem (Tamilnadu)",
            "Warangal (Telangana)"
            
        ]

    },
    {
        id: 2,
        question:"Q2.The 'Black flag' signifies",
        asnwer:"protest",
        Option:[
            "revolution/danger",
            "peace",
            "protest",
            "truce"
            
        ]

    },
    {
        id: 3,
        question:"Q3.Philology is the",
        asnwer:"science of language",
        Option:[
            "study of bones",
            "study of muscles",
            "study of architecture",
            "science of language"
            
        ]

    },
    {
        id: 4,
        question:"Q4.The number of already named bones in the human skeleton is",
        asnwer:"206",
        Option:[
            "200",
            "206",
            "212",
            "218"
            
        ]

    },
    {
        id: 5,
        question:"Q5.When light passes from air into glass it experiences change of",
        asnwer:"wavelength and speed",
        Option:[
            "frequency and wavelength  ",
            "frequency and speed",
            "wavelength and speed",
            "frequency, wavelength and speed"
            
        ]

    }
]


function submitform(event) {
    
  event.preventDefault();  
    var name=document.forms["formname"]["inputname"].value;
    if(name==""){
        alert("Please enter your name!");
       
    }else{
        
    sessionStorage.setItem("Name",name);
    location.href="./questions.html";
   
    console.log(name);

    }
   
}


 
let points=0;
var question_count=0;
function next(){
    let correctans=document.querySelector("li.option.active").innerHTML;
    if (correctans==questionlist[question_count].asnwer) {
        points++;
        sessionStorage.setItem("points",points);
    }
    if (question_count==questionlist.length-1) {
        sessionStorage.setItem("time",`${minutes} minutes & ${seconds} seconds`);
        clearInterval(mytime);
        location.href ="score.html";
        return;
    }  

    
    
   
    question_count++;
    console.log(question_count);
    show(question_count);
}
function show (count) {
    let question =document.getElementById("questionsid");
    question.innerHTML=`<h2>${questionlist[count].question}</h2> 
    <ul >
    <li class="option ">${questionlist[count].Option[0] }</li>
    <li class="option">${questionlist[count].Option[1] }</li>
    <li class="option">${questionlist[count].Option[2] }</li>
    <li class="option">${questionlist[count].Option[3] }</li>
    
   
</ul>`;
toggleActive()
    
}
function toggleActive() {
    let option =document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick= function () {
            for (let j = 0; j < option.length; j++) {
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active")
                }
                
            }
            option[i].classList.add("active");
        }
        
    }
} 





let nameofuser =sessionStorage.getItem("Name");
let pointsofuser=sessionStorage.getItem("points");
let timesofuser=sessionStorage.getItem("time");
document.querySelector(".name").innerHTML =nameofuser;

document.querySelector(".points").innerHTML =pointsofuser;
document.querySelector(".time").innerHTML =timesofuser;



