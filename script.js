let screen = document.getElementById("result")

document.getElementById("btn1").addEventListener("click",
    ()=>{
screen.innerHTML+=1; 
    }
)

document.getElementById("btn2").addEventListener("click",
    ()=>{
screen.innerHTML+=2;
    }
)

document.getElementById("btn3").addEventListener("click",
    ()=>{
screen.innerHTML+=3;
    }
)

document.getElementById("btn4").addEventListener("click",
    ()=>{
screen.innerHTML+=4;
    }
)
document.getElementById("btn5").addEventListener("click",
    ()=>{
screen.innerHTML+=5;
    }
)
document.getElementById("btn6").addEventListener("click",
    ()=>{
screen.innerHTML+=6;
    }
)
document.getElementById("btn7").addEventListener("click",
    ()=>{
screen.innerHTML+=7;
    }
)
document.getElementById("btn8").addEventListener("click",
    ()=>{
screen.innerHTML+=8;
    }
)
document.getElementById("btn9").addEventListener("click",
    ()=>{
screen.innerHTML+=9;
    }
)
document.getElementById("btn0").addEventListener("click",
    ()=>{
screen.innerHTML+=0;
    }
)
document.getElementById("btn.").addEventListener("click",
    ()=>{
        screen.innerHTML+="."
    }
)
document.getElementById("btn+").addEventListener("click",
    ()=>{
screen.innerHTML+="+";
    }
)
document.getElementById("btn-").addEventListener("click",
    ()=>{
screen.innerHTML+="-";
    }
)
document.getElementById("btn*").addEventListener("click",
    ()=>{
screen.innerHTML+="*";
    }
)
document.getElementById("btn/").addEventListener("click",
    ()=>{
        screen.innerHTML+="/";
    }
)
document.getElementById("btn=").addEventListener("click",
    ()=>{
screen.innerHTML=eval(screen.innerHTML);
    }
)
document.getElementById("btnCE").addEventListener("click",
    ()=>{
screen.innerHTML =" ";
    }
)

document.getElementById("btn+").style.height="100px"
document.getElementById("btn-").style.height="30px";