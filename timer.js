let dt =new Date(new Date().setTime(0));
let time =dt.getTime();
let seconds =Math.floor((time%(100*60))/1000);
let minutes =Math.floor((time%(100*60*60))/(1000*60));


let stime=0;
let mytime =setInterval(function() {
    if (seconds<59) {
        seconds++;
        
    }else{
       
        minutes++;
        seconds=0;
    }
    let formatsec=seconds<10?`0${seconds}`:`${seconds}`;
    let formatmin=minutes<10?`0${minutes}`:`${minutes}`;
    console.log(formatmin+":"+ formatsec);
    document.querySelector(".time").innerHTML=formatmin+":"+formatsec;
    
}, 1000);